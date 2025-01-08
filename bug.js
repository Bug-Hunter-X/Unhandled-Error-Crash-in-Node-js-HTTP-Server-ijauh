const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);

//The above code is a simple HTTP server, however, there is a potential bug when the server encounters an error.
//This is because the server will crash when facing an unexpected error without properly handling it.  This can happen due to various reasons, including network issues or unexpected requests.

//To illustrate the bug, consider adding a line to the requestListener function that deliberately throws an error

const requestListener = function (req, res) {
  res.writeHead(200);
  throw new Error('Something went wrong!');
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);