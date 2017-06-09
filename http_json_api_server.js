var date = new Date()
var http = require('http')
var map = require('through2-map')
var url = require('url')
// JSON request /api/parsetime?iso=2013-08-10T12:10:15.474Z
http.createServer(function callback(req, res) {
    
    var ut = date.getTime()
    res.writeHead(200, { 'Content-Type': 'application/json' })

    //routing logic

    var parsedURL = url.parse(req.url, true)
    var result = {}

    switch (parsedURL.pathname) {
        case '/api/parsetime':
            date = new Date(parsedURL.query.iso)
            result.hour = date.getHours()
            result.minute = date.getMinutes()
            result.second = date.getSeconds()
            break

        case '/api/unixtime':
            result.unixtime = ut
            break

        default:
            console.log("Invalid Request")
            break
    }


    res.end(JSON.stringify(result))

}).listen(process.argv[2])