let fs = require('fs');

console.log("Above an async code");
fs.readFile('./content.md', {encoding: 'utf8'}, (err, content) => {
    console.log(content.toString() , "from async");
})

console.log("Above a sync code");
const data = fs.readFileSync('./content.md');


console.log(data.toString());

let buff1 = Buffer.alloc(10);
buff1.write("Welcome to Buffer");
console.log(buff1.toString());