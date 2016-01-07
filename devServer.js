var path = require('path')
var express = require('express')
var webpack = require('webpack')
var config = require('./webpack.config.dev')
var compression = require('compression')

var app = express()
var server = require('http').createServer(app)
var io = require('socket.io')(server)

var compiler = webpack(config)
var port = 3000

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

app.use(compression({
  threshold: 512
}))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

server.listen(port, '0.0.0.0', function (err) {
  if (err) {
    console.log(err)
    return
  }

  console.log('Listening at http://localhost:' + port)
})

io.on('connection', function (socket) {
  io.set('origins', '*:*')
  console.log('connected')
  socket.emit('update', 'connected')
  socket.on('single', function () {
    socket.emit('update', 'single')
  })
  socket.on('publish', function (data) {
    io.sockets.emit('update', data)
  })
})
