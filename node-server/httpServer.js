const http = require('http');
const host = 'localhost';
const port = 3000;

// The createServer() method of http creates a new HTTP server and returns it.
const server = http.createServer((req, res)=> {
    res.statusCode = 200;                           // we set the statusCode property to 200, to indicate a successful response.
    res.setHeader('Content-type', 'text/plain');    // We set the Content-Type header:
    res.end('Hello World')                          // we close the response, adding the content as an argument to end()
})

// The server is set to listen on the specified port and host name. 
// When the server is ready, the callback function is called, in this case informing us that the server is running.
server.listen(port, host, ()=> {
    console.log(`Server running at http://${host}:${port}`)
})