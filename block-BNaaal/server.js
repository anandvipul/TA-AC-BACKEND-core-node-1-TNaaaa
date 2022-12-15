var http = require('http');

http.createServer(serverhandler).listen(4000);
function serverhandler(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Server Has Started");
    res.end();
}