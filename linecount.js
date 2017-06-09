var fs = require("fs");

var fileName = process.argv[2];
//console.log("Reading file:", fileName);
var buffer = fs.readFileSync(fileName);


var lineCount = 0;//buffer.length>0 ? 1 : 0;

for (var i=0; i<buffer.length; i++) {
    if (buffer[i]===10) {
        lineCount++;
    }
}

console.log(lineCount);