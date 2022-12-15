const fs = require('fs');
let http = require('http');
let url = require('url');

http.createServer(handleServer).listen(5555, () => {console.log("Server Has Started")});
function handleServer(request, response) {
    let parsedUrl = url.parse(request.url);

    // console.log(parsedUrl);
    if (parsedUrl.pathname === "/strea" && request.method === "GET") {
        response.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream("./node.html").pipe(response);
        // response.end();
    } else if (parsedUrl.pathname === "/file" && request.method === "GET") {
        response.writeHead(200, {"Content-Type": "text/html"});
        fs.readFile("./node.html", (err, content)=>{
            response.end(content);
        });
    } else {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.end("Go to hell");
    }
}