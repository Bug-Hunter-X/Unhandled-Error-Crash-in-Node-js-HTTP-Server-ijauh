# Unhandled Error Crash in Node.js HTTP Server

This repository demonstrates a common but easily overlooked bug in Node.js:  a lack of proper error handling in an HTTP server.  The included `bug.js` file shows a simple HTTP server that crashes when it encounters an unexpected error. The `bugSolution.js` file provides a corrected version with proper error handling.

## Bug Description

The original `bug.js` creates a basic HTTP server. However, it lacks error handling. If an unexpected error occurs during request processing (e.g., a network issue or an internal error within the request handler), the server will crash, abruptly terminating the process.  This results in service disruption.

## Solution

The solution (`bugSolution.js`) demonstrates how to properly handle errors within the HTTP server's request listener using `try...catch` blocks. This prevents crashes and allows for graceful error handling, such as logging the error and sending a more informative response to the client.

## How to reproduce the bug:
1. Clone this repository.
2. Run `node bug.js`.
3. The server should start successfully.
4. Attempt to trigger an error; you may not need to, as the error is already included in the code.
5. The server will crash.

## How to see the solution:
1. Run `node bugSolution.js`.
2. The server starts and won't crash upon encountering the error, it handles the error gracefully.
