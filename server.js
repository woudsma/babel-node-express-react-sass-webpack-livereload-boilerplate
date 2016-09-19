// Don't start coding here

require('babel-register')
require('./src/main')

if(process.env.NODE_ENV === 'development') {

  var webpack = require('webpack')
  var WebpackDevServer = require('webpack-dev-server')
  var config = require('./webpack.config.js')

  new WebpackDevServer(webpack(config), {
    historyApiFallback: true,
    proxy: {
     "*": "http://localhost:3000"
    },
    stats: {
      colors: true,
      chunks: false
    }
  }).listen(3001, 'localhost', function (err, result) {
     if (err) {
       console.log(err)
     }

     console.log('webpack-dev-server listening @ http://localhost:3001')
  })

}
