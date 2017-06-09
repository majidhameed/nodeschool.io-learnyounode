
var fs = require("fs")
var path = require("path")

module.exports = function (dirName, fileExt, callback) {

    fs.readdir(dirName, function (err, list) {

        if (err) {
            return callback(err)
        }

        list = list.filter(function (file) {
            return path.extname(file) === '.' + fileExt
        })

        callback(null, list)
    })
}