var http = require('http')
var bl = require('bl')

var resArr = [];
doAsyncHttp(2, doAsyncHttp(3, doAsyncHttp(4)));
var count = 0;
function doAsyncHttp(argNo, callBack) {

    http.get(process.argv[argNo], function (res) {
        res.setEncoding('utf8')
        res.pipe(bl(function (err, data) {
            if (err) {
                return console.error(err)
            }

            if (data) {
                resArr[argNo] = data.toString()
                count++;

                if (callBack) {
                    callBack()
                } else if (count === 3) {
                    printRes()
                }
            }
        }));
    }).on('error', console.error)
}

function printRes() {
    for (var i = 0; i < 3; i++) {
        console.log(resArr[2 + i])
    }
}