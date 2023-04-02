const http = require("http");
const port = 5000;

const server = http.createServer((req, res)=> {
    // Handle incoming request
    if(req.url === '/'){
        res.write("Hello World from http Server");
        res.end();
    }
});

server.listen(port, ()=> {
    console.log("Server listening on port", port);
});