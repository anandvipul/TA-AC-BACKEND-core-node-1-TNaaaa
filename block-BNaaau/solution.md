```js
// Create a basic server using http's createServer

// listen for request on port 5000
// console request and response object
// do a request using browser on localhost:5000
// check out console for request and response object

let http = require("http");

http
  .createServer((request, response) => {
    console.log(request);
    console.log(response);
    response.end();
  })
  .listen(5000, () => {
    console.log("Server Started and available on http://localhost:5000");
  });
```

```js
// create a node server

// add listener on port 5100
// respond with 'My first server in NodeJS' using response object

let http = require("http");

http
  .createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("My first server in NodeJS");
    response.end();
  })
  .listen(5100, () => {
    console.log("Server Started and available on http://localhost:5100");
  });
```

```js
// write code to create a node server

// add listener on port 5555
// console request headers
// respond with content of user-agent from request headers.

let http = require("http");

http
  .createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    console.log(request.headers);
    response.write(request.headers['user-agent']);
    response.end();
  })
  .listen(5555, () => {
    console.log("Server Started and available on http://localhost:5555");
  });
```

```js
// write code to create a node server

// add listener on port 7000
// also add a callback function to listener with a console server listening on port 7000
// return entire request headers in response.

let http = require("http");

http
  .createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(JSON.stringify(request.headers));
    response.end();
  })
  .listen(7000, () => {
    console.log("Server Started and available on http://localhost:7000");
  });
```

```js
// add a listener on port 3333
// set status code 202 in response using res.statusCode.

let http = require("http");

http
  .createServer((request, response) => {
    response.statusCode = 202;
    response.write(JSON.stringify(request.headers));
    
    response.end();
  })
  .listen(3333, () => {
    console.log("Server Started and available on http://localhost:3333");
  });
```


```js
// create a server

// add a listener on port 8000
// set appropriate header for html response using res.setHeader
// return an HTML response(<h3>Welcome to altcampus</h3>)

let http = require("http");

http
  .createServer((request, response) => {
    response.setHeader("Success", 202);
    response.setHeader("Content-Type", "text/html")
    response.write("<h3>Welcome to altcampus</h3>");
    
    response.end();
  })
  .listen(8000, () => {
    console.log("Server Started and available on http://localhost:8000");
  });
```

```js
// create a server

// add a listener on port 8000
// set appropriate header for html response using res.setHeader
// return an HTML response(<h3>Welcome to altcampus</h3>)

let http = require("http");

http
  .createServer((request, response) => {
    // response.setHeader("Success", 202);
    // response.setHeader("Content-Type", "text/html")
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h3>Welcome to altcampus</h3>");
    
    response.end();
  })
  .listen(8000, () => {
    console.log("Server Started and available on http://localhost:8000");
  });
```

```js
// create a server

// add a listener on port 8000
// set appropriate header for html response using res.setHeader
// return an HTML response(<h3>Welcome to altcampus</h3>)

let http = require("http");

http
  .createServer((request, response) => {
    // response.setHeader("Success", 202);
    // response.setHeader("Content-Type", "text/html")
    response.writeHead(200, {"Content-Type": "json"});
    response.write("{success: true, message: 'Welcome to Nodejs'}");
    
    response.end();
  })
  .listen(8888, () => {
    console.log("Server Started and available on http://localhost:8888");
  });
```

```js
// create a server

// add listener on port 5050
// use postman to do a POST request on index route
// console to check request method
// send HTML response i.e. <h2>posted for first time</h2>

let http = require("http");

http
  .createServer((request, response) => {
    // response.setHeader("Success", 202);
    // response.setHeader("Content-Type", "text/html")
    console.log(request.method);
    response.writeHead(200, {"Content-Type": "json"});
    response.write("posted for first time");
    
    response.end();
  })
  .listen(5050, () => {
    console.log("Server Started and available on http://localhost:5050");
  });
```

```js
// create a server

// add listener on port 5050
// use postman to do a POST request on index route
// console to check request method
// send HTML response i.e. <h2>posted for first time</h2>

let http = require("http");
let url = require("url");

http
  .createServer((request, response) => {
    // response.setHeader("Success", 202);
    // response.setHeader("Content-Type", "text/html")
    
    let parsedUrl = url.parse(request.url);
    response.setHeader("Content-Type", "text/html");
    console.log(parsedUrl);
    if (parsedUrl.pathname == "/") {
        response.write("Agneepath");
    } else if (parsedUrl.pathname == "/about") {
        response.write("<h2>Agneepsth</h2>");
    } else {
        response.statusCode = 404;
        response.write("Content Not Found");
    }
    
    response.end();
  })
  .listen(2345, () => {
    console.log("Server Started and available on http://localhost:2345");
  });
```


```js
// Handle 2 requests on same route with different method 1. GET on '/users' route where return a simple HTML form with name and email field 2. POST on '/users' route with a message 'Posted for the second time'

let http = require("http");
let url = require("url");
let fs = require('fs');

http
  .createServer((request, response) => {
    // response.setHeader("Success", 202);
    // response.setHeader("Content-Type", "text/html")
    
    let parsedUrl = url.parse(request.url);
    response.setHeader("Content-Type", "text/html");
    console.log(parsedUrl);
    if (parsedUrl.pathname == "/users" && request.method == "GET") {
        fs.createReadStream("./form.html").pipe(response);
    } else if (parsedUrl.pathname == "/users" && request.method == "POST") {
        response.write("Posted For Second Time");
        response.end();
    } else {
        response.statusCode = 404;
        response.write("Content Not Found");
        response.end();
    }
    
    
  })
  .listen(2345, () => {
    console.log("Server Started and available on http://localhost:2345");
  });
```

```js
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
```