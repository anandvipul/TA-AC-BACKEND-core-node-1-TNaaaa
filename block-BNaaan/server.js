let http = require("http");

http
  .createServer((req, res) => {
    console.log(req.headers);
    console.log(req.method);
    res.end();
  })
  .listen(3000, () => {
    console.log("Server Has Been Started");
  });
