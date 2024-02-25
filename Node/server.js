// Node js has gobal object instead of window object
// has common core modules
 
const os = require('os');
const path = require('path');
const {add , sub , mul , div } = require('./math')

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());
// console.log(__dirname);
// console.log(__filename);
console.log(add(9,6));
console.log(sub(9,6));

console.log(mul(9,6));

console.log(div(9,6));


// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));