let url = require('url');

let urlString = "https://airindia.com/fares/calculate?from=delhi&to=detroit";
let parsedUrl = url.parse(urlString, true);

console.log(parsedUrl.query);
console.log(parsedUrl.pathname);
console.log(parsedUrl.protocol);