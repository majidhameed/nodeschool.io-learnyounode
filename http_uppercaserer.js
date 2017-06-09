var http = require('http')
var map = require('through2-map')

http.createServer(function callback(req, res) {
    if (req.method!=='POST') {
        return res.end('Only post requests allowed\n')
    }
    res.writeHead(200, { 'content-type': 'text/plain' })
    req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
    })).pipe(res)
}).listen(process.argv[2])