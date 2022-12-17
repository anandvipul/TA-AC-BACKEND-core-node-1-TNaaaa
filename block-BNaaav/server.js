let http = require("http");
let url = require("url");
let fs = require("fs");

http
  .createServer((req, res) => {
    let parsedUrl = url.parse(req.url);
    res.setHeader("Content-Type", "text/html");
    if (parsedUrl.pathname == "/" && req.method === "GET") {
      fs.createReadStream("index.html").pipe(res);
    }

    if (parsedUrl.pathname === "/about.html" && req.method === "GET") {
      fs.createReadStream("about.html").pipe(res);
    }
    // check for css requests using url
    if (parsedUrl.pathname.split(".").pop() === "css") {
      // set header for css file
      res.setHeader("Content-Type", "text/css");
      // read css file and send it in response
      fs.readFile("./" + parsedUrl.pathname, (err, content) => {
        if (err) return console.log(err);
        res.end(content);
      });
    }

    // check for img requests using url
    if (parsedUrl.pathname.split(".").pop() === "png") {
      // set header for css file
      res.setHeader("Content-Type", "image/png");
      // read css file and send it in response
      fs.readFile("./" + parsedUrl.pathname, (err, content) => {
        if (err) return console.log(err);
        res.end(content);
      });
    }

    // check for img/jpg requests using url
    if (parsedUrl.pathname.split(".").pop() === "jpg") {
      // set header for css file
      res.setHeader("Content-Type", "image/jpg");
      // read css file and send it in response
      fs.readFile("./" + parsedUrl.pathname, (err, content) => {
        if (err) return console.log(err);
        res.end(content);
      });
    }

    if (parsedUrl.pathname.split(".").pop() === "svg") {
      // set header for css file
      res.setHeader("Content-Type", "image/svg");
      // read css file and send it in response
      fs.readFile("./" + parsedUrl.pathname, (err, content) => {
        if (err) return console.log(err);
        res.end(content);
      });
    }
  })
  .listen(4000, () => {
    console.log("The Server is Up and Running at: http://localhost:4000");
  });
