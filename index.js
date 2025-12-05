
const http = require('node:http');
const fs = require('node:fs');

const server = http.createServer((req, res) => {
  let pathName;
  switch(req.url){
    case "/": 
      pathName = './index.html'; 
    break; 
    case "/about.html": 
      pathName = './about.html'; 
    break; 
    case "/contact.html": 
      pathName = './contact.html'; 
    break; 
    default: 
      pathName = './404.html'; 
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end(fs.readFileSync(pathName));
      return;
  }
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(fs.readFileSync(pathName));
});

server.listen(8080);

