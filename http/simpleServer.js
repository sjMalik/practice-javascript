const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write("Hello World from Nodejs");
        res.end();
    } else {
        res.write("Request from other domain");
        res.end();
    }
});

server.listen(3000);

