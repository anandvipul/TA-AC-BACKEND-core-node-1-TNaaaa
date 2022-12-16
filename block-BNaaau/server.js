// parse the request url using parse method from url module
// console pathname from parsed url in above step
// grab url using req.url
// differentiate between req.url and parsedUrl.pathname
// grab the email from query params
// return json response with email from query params

let http = require("http");
let url = require("url");
let fs = require('fs');

http
  .createServer((request, response) => {
    // response.setHeader("Success", 202);
    // response.setHeader("Content-Type", "text/html")
    
    let parsedUrl = url.parse(request.url, true);
    response.setHeader("Content-Type", "text/html");
    console.log(parsedUrl.pathname);
    console.log(request.url);
    console.log(parsedUrl.query["email"]);
    
    response.end();
    
  })
  .listen(2345, () => {
    console.log("Server Started and available on http://localhost:2345");
  });
