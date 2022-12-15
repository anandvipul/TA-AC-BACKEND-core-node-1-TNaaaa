let http = require('http');

http.createServer((req, res) => {
    res.writeHead(201, {'Content-Type': 'text/html'});
    res.write("Helllo");
    res.write("World");
    res.end();
}).listen(4444);