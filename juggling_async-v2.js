var http = require('http')
var bl = require('bl')

var resArr = [];
var count = 0;

for (var i=0; i<3; i++) {
    doAsyncHttp(2+i);
}

function doAsyncHttp(argNo) {

    http.get(process.argv[argNo], function (res) {
        res.setEncoding('utf8')
        res.pipe(bl(function (err, data) {
            if (err) {
                return console.error(err);
            }

            if (data) {
                
                resArr[argNo] = data.toString()
                count++
                
                if (count==3) {
                    printRes();
                }
            }
        }));
    }).on('error', console.error)
}

function printRes() {
    for (var i=0; i<3; i++) {
        console.log(resArr[2+i])
    }
}