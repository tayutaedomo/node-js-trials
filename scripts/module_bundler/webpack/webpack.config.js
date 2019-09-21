
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'main.js'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname),

    // Refer: https://qiita.com/jkr_2255/items/283bc12dd07bc237179e
    libraryTarget: 'commonjs2'
  },

  // Refer: https://webpack.js.org/configuration/target/
  target: 'node',

  externals: [],

  plugins: []
};

