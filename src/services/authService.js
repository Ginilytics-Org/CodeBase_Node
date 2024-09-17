const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const { generateAccessToken, generateRefreshToken } = require('../utils/generateToken');

async function registerUser(data) {
  const userExists = await User.findOne({ where: { email: data.email } });
  if (userExists) {
    throw new Error('User already exists');
  }
  
  return await User.create(data);
}

async function loginUser(email, password) {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new Error('Invalid email or password');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Invalid email or password');
  }

  const accessToken = generateAccessToken(user.id);
  const refreshToken = generateRefreshToken(user.id);

  user.refreshToken = refreshToken;
  await user.save();

  return { accessToken, refreshToken };
}

async function refreshAccessToken(refreshToken) {
  const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
  const user = await User.findByPk(decoded.id);

  if (!user || user.refreshToken !== refreshToken) {
    throw new Error('Invalid refresh token');
  }

  const newAccessToken = generateAccessToken(user.id);
  return { accessToken: newAccessToken };
}

async function logoutUser(refreshToken) {
  const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
  const user = await User.findByPk(decoded.id);

  if (user) {
    user.refreshToken = null;
    await user.save();
  }
}

module.exports = {
  registerUser,
  loginUser,
  refreshAccessToken,
  logoutUser,
};
