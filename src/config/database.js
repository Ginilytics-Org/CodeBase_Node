const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const isProduction = process.env.NODE_ENV === 'production';

const sequelize = new Sequelize(
  isProduction ? process.env.PROD_DB_NAME : process.env.DEV_DB_NAME,
  isProduction ? process.env.PROD_DB_USER : process.env.DEV_DB_USER,
  isProduction ? process.env.PROD_DB_PASSWORD : process.env.DEV_DB_PASSWORD,
  {
    host: isProduction ? process.env.PROD_DB_HOST : process.env.DEV_DB_HOST,
    dialect: 'postgres',
    port: isProduction ? process.env.PROD_DB_PORT : process.env.DEV_DB_PORT,
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    dialectOptions: {
      ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
    },
  }
);

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to PostgreSQL has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = { sequelize, connectToDatabase };
