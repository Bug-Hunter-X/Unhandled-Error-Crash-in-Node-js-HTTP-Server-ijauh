const http = require('http');

const requestListener = function (req, res) {
  try {
    res.writeHead(200);
    throw new Error('Something went wrong!');
    res.end('Hello, World!');
  } catch (err) {
    console.error('Error:', err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server listening on port 8080');
});
//This improved version uses a try...catch block to handle the error. If an error occurs within the try block, the catch block will execute, logging the error to the console and sending a 500 Internal Server Error response to the client.
//Additionally, the server now includes a listener to confirm when the server starts successfully.