const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // Serve index.html
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, (err, content) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    });

  } else if (req.url === '/style.css') {
    const filePath = path.join(__dirname, 'style.css');
    fs.readFile(filePath, (err, content) => {
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.end(content);
    });

  } else if (req.url === '/books') {
    const filePath = path.join(__dirname, 'books.json');
    fs.readFile(filePath, (err, content) => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(content);
    });

  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(port, () => {
  console.log(`Bookstore running at http://localhost:${port}`);
});
