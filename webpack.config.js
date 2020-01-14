const path = require('path');
const webpack = require('webpack')

module.exports = {
entry: {
    a: "./src/a.js",
    b: "./src/b.js",
    c: "./src/c.js"
},
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
   new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
   })
  ],
  optimization: {
      usedExports: true,
      splitChunks: {
          chunks: "all",
          cacheGroups: {
            common: {
                name: 'common',
                minChunks: 2,
                enforce: true,
            },
          }
      },
    }
};
