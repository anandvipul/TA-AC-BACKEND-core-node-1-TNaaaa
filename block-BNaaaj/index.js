let os = require('os');
console.log("Welcome to Node.js");
console.log(os.cpus());
console.log(os.freemem());
console.log(os.uptime());
console.log(os.version());

// Temporary Files
let fs = require('fs');

fs.unlink('./temp.md', (err => {
    if (err) console.log(err);
    else {
        console.log("Deleted");
    }
}));