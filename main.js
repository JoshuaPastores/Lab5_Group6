const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<html><body><h1>Home Page</h1></body></html>");
        res.write("<a href='/AbalosPage'>Go to Abalos PAGE</a>")
        res.end();
        
}else if (req.url === "/AbalosPage"){
            res.writeHead(200, {"Content-Type":"text/html"});

                res.write("<html><body style='background-color:grey;'><center><h1>NAME: Abalos Timothy James</h1></center></body></html>");
                                                                                      
               res.write("<html><body><center><h1>EMAIL: timothyabalos02@gmail.com</h1></center></body></html>");
                                                                                      
               res.write("<html><body><center><h1>AGE: 21</h1></center></body></html>");
                                                                                                              
               res.write("<html><body><center><h1>HOBBIES: Collecting Sneakers</h1></center></body></html>");
                                                                                      
               res.write("<html><body><center><h1>SCHOOL: University of Santo Tomas</h1></center></body></html>");
                                                                                                                    
                res.write("<html><body><center><h1>PROGRAM: Information Systems</h1></center></body></html>");
                                                                                                   
                res.write("<html><body><center><h1>YEAR LEVEL: 3rd Year</h1></center></body></html>");
                
                res.write("<center><a href='/'>Go to Home Page</a></center>")
                res.end();

    } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<html><body><h1>404: Page not found</h1></body></html>");
        res.write("<a href='/'>Go to Home page</a>")
        res.end();
    }
}).listen(3000);

console.log("listening to port 3000");


const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<html><body><h1>Home Page</h1></body></html>");
        res.write("<a href='/AbalosPage'>Go to Abalos PAGE</a>")
        res.end();
        
}else if (req.url === "/PersonalInfo"){
            res.writeHead(200, {"Content-Type":"text/html"});
                res.write("<html><body style='background-color:lightblue;'><center><h1>NAME: Abalos Timothy James</h1></center></body></html>");                                                                                 
                res.write("<html><body><center><h1>EMAIL: joshuaandre.pastores.iics@ust.edu.ph</h1></center></body></html>");                                                                                     
                res.write("<html><body><center><h1>AGE: 21</h1></center></body></html>");
                res.write("<html><body><center><h1>SCHOOL: University of Santo Tomas</h1></center></body></html>");                                                                                                      
                res.write("<html><body><center><h1>PROGRAM: Information Systems</h1></center></body></html>");
                res.write("<html><body><center><h1>YEAR LEVEL: 3rd Year</h1></center></body></html>");
                res.write("<center><a href='/'>Go to Home Page</a></center>")
                res.end();
    } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<html><body><h1>404: Page not found</h1></body></html>");
        res.write("<a href='/'>Go to Home page</a>")
        res.end();
    }
}).listen(3000);
console.log("listening to port 3000");