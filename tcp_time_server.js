var strftime = require('strftime')
var net = require('net')

var server = net.createServer(function (socket) {
    socket.end(strftime('%F %R', new Date()) + "\r\n")
}).listen(process.argv[2])

