let area = require('./area');

console.log(area.square(2));
console.log(area.rectangle(2,3));
console.log(area.circle(2));

let buff1 = Buffer.alloc(12);
let buff2 = Buffer.allocUnsafe(12);

buff1.write("hello boys!");
buff2.write("hello girls");
console.log(buff1.toString());