
const http = require('node:http');
const fs = require('node:fs');
const express = require("express"); 
const app = express(); 

// create a function that reads a file and spits out the buffer object.

const data = (filepath) => Buffer.from(fs.readFileSync(filepath));
// listen for a string that is not in this array of valid urls



app.get("/", (req, res)=> {
  res.set('Content-Type', 'text/html'); 
  res.send(data('./index.html')); 
});

app.get("/about.html", (req, res)=> {
  res.set('Content-Type', 'text/html'); 
  res.send(data('./about.html')); 
});

app.get("/contact.html", (req, res)=> {
  res.set('Content-Type', 'text/html'); 
  res.send(data('./contact.html')); 
});

const PORT = 3000; 
app.listen(PORT, (error) => {

  if (error) {
    throw error;
  }

}); 

