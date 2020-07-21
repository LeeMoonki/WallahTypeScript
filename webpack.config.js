const path = require('path');

// bundle typescript example

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.ts'
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    // attempt to resolve these extensions in order
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }
};
