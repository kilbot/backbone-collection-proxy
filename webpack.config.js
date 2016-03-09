module.exports = {
  entry: './index.js',
  output: {
    filename: 'backbone-collection-proxy.js',
    library: 'proxyCollection'
  },
  externals: {
    jquery: 'jQuery',
    lodash: '_',
    underscore: '_',
    backbone: 'Backbone'
  }
}