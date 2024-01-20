const express = require("express");
const http = require("http");
const app = new express();

app.use(express.static('views'))

const port = 9000;
// http.createServer( (req, res) => {
//     if(req.url == '/') {
//         res.write("<h1>This is node js text</h1>");
//         res.end();
//     }
//     else if(req.url == '/about') {
//         res.write("<h1>This is about node js</h1>");
//         res.end();
//     }
    
// } ).listen(port);

app.get('/login', (req, res) => {
    res.send(`<h1>This is about node js</h1>`)
});

// to show data or text 
app.get('/about', (req, res) => {
    res.send(`<h1>About page</h1>`)
});

// to save data
app.post('/data', (req, res) => {
    res.send('Got a POST request')
  });

//   to update data
  app.put('/pdata', (req, res) => {
    res.send('Got a POST request')
  });
//   to delete data
app.delete('/ddata', (req, res) => {
    res.send('Got a POST request')
  });

app.listen( port );


