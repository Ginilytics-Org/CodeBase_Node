# Node.js Demo Application

Welcome to the Node.js Demo Application! This project is a Node.js microservice featuring PostgreSQL integration and Swagger UI for API documentation.

## Features

- **PostgreSQL Integration**: Utilizes PostgreSQL for database operations.
- **Swagger UI**: Provides interactive API documentation.
- **Environment Configuration**: Supports different configurations for development and production.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (v8 or higher)
- [PostgreSQL](https://www.postgresql.org/) - Ensure you have a PostgreSQL database set up.

## Getting Started

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Ginilytics-Org/CodeBase_Node.git
    cd node-demo-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env.development` file for development settings and a `.env.production` file for production settings in the root directory. Use the provided `.env.example` file as a reference.

    - **Create a `.env.example` file** with the following content:

      ```ini
      # Common variables
      JWT_ACCESS_SECRET=your_access_secret_key
      JWT_REFRESH_SECRET=your_refresh_secret_key

      # Development environment variables
      DEV_PORT=your_development_app_port
      DEV_DB_PORT=your_development_db_port
      DEV_DB_NAME=your_development_db_name
      DEV_DB_USER=your_development_db_user
      DEV_DB_PASSWORD=your_development_db_password
      DEV_DB_HOST=your_development_db_host

      # Production environment variables
      PROD_PORT= your_production_app_port
      PROD_DB_PORT=your_production_db_port
      PROD_DB_NAME=your_production_db_name
      PROD_DB_USER=your_production_db_user
      PROD_DB_PASSWORD=your_production_db_password
      PROD_DB_HOST=your_production_db_host

      # Specify the environment
      NODE_ENV=development  # Change to 'production' in production
      ```

    - **Create a `.env.development` file** by copying the `.env.example` file and replacing placeholder values with your actual development environment settings.

    - **Create a `.env.production` file** by copying the `.env.example` file and replacing placeholder values with your actual production environment settings.

4. **Run the application:**

    - For development:

        ```bash
        npm run start:dev
        ```

    - For production:

        ```bash
        npm run start:prod
        ```

    The application will start and be available at `http://localhost:3000` by default.

5. **Build the project:**

    ```bash
    npm run build
    ```

6. **Run tests:**

    ```bash
    npm test
    ```

## Scripts

- **Start Development**: `npm run start:dev` - Starts the application in development mode.
- **Start Production**: `npm run start:prod` - Starts the application in production mode.
- **Build**: `npm run build` - Bundles the application using Webpack.
- **Test**: `npm test` - Runs tests using Mocha.

## Dependencies

This project uses the following key dependencies:

- **Express**: `^4.18.2` - Web framework for Node.js.
- **Sequelize**: `^6.32.1` - ORM for PostgreSQL.
- **Swagger UI Express**: `^4.5.0` - Middleware for Swagger UI integration.
- **dotenv**: `^16.4.5` - Loads environment variables from a `.env` file.
- **jsonwebtoken**: `^9.0.2` - JSON Web Token implementation.

## Development

For development, we use:

- **Babel**: For JavaScript transpilation.
- **Webpack**: For module bundling.
- **Mocha**: For running tests.
- **Nodemon**: For automatically restarting the server during development.

## Acknowledgements

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Swagger UI](https://swagger.io/tools/swagger-ui/)

---

Feel free to modify this README as needed. For any questions or issues, please open an issue on the [GitHub repository](https://github.com/your-username/node-demo-app/issues).
