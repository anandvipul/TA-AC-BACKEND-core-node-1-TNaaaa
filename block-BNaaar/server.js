let http = require('http');
let url = require('url');
http.createServer(handleServer).listen(5000, () => {console.log("Server Has Been Started")});
function handleServer(req, res) {
    let urlString = req.url;
    let parsedUrl = url.parse(urlString);
    
    if (req.method === "GET" && parsedUrl.path === "/") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("Welcome to Home Page");
        res.end();
    } else if (req.method === "GET" && parsedUrl.path === "/about") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h2>This is All About NodeJS</h2>");
        res.end();
    } else if (req.method === "POST") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("{message: this is a post request}");
        res.end();
    } else {
        res.writeHead(404, {"Content-Type": "text/html"});
        res.write("<h1>Not Found</h1>");
        res.end();
    }
    res.end();


}