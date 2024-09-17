const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const { sequelize, connectToDatabase } = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');
const setupSwagger = require('./docs/swagger');



const isProduction = process.env.NODE_ENV === 'production';

// Set up configuration based on environment
const PORT = isProduction ? process.env.PROD_PORT : process.env.DEV_PORT;
const DB_PORT = isProduction ? process.env.PROD_DB_PORT : process.env.DEV_DB_PORT;
const DB_NAME = isProduction ? process.env.PROD_DB_NAME : process.env.DEV_DB_NAME;
const DB_USER = isProduction ? process.env.PROD_DB_USER : process.env.DEV_DB_USER;
const DB_PASSWORD = isProduction ? process.env.PROD_DB_PASSWORD : process.env.DEV_DB_PASSWORD;
const DB_HOST = isProduction ? process.env.PROD_DB_HOST : process.env.DEV_DB_HOST;

const app = express();

app.use(express.json());

// Setup Swagger
setupSwagger(app);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

app.use(errorMiddleware);

connectToDatabase({
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT
}).then(async () => {
  await sequelize.sync({ force: false }); 
  console.log('All models were synchronized successfully.');

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`);
  });
});
