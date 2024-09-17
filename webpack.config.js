const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  // The entry point of your application
  entry: './src/index.js',

  // Specify that we're targeting a Node.js environment
  target: 'node',

  // Exclude node_modules from the bundle
  externals: [nodeExternals()],

  // Define output settings
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  // Set the mode to development or production
  mode: process.env.NODE_ENV || 'development',

  // Set up module rules for processing different file types
  module: {
    rules: [
      {
        test: /\.js$/, // Transpile JS files using Babel
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'] // Use the preset-env Babel preset
          }
        }
      }
    ]
  },

  // Enable source maps for easier debugging
  devtool: 'source-map'
};
