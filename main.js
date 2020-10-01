const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<html><body><h1>Home Page</h1></body></html>");
        res.write("<a href='/AbalosPage'>Go to Abalos PAGE</a>")
        res.end();


    } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<html><body><h1>404: Page not found</h1></body></html>");
        res.write("<a href='/'>Go to Home page</a>")
        res.end();
    }
}).listen(3000);

console.log("listening to port 3000");