const http = require('node:http');
const fs = require("fs");

const url = "localhost";

const port = 4000;

http.createServer( (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if(req.url == '/') {
        let data = {
            id: 1,
            name: "david",
            email: "Email@m.com"
        }
        res.write(JSON.stringify(data));
        res.end();
    }
    else if(req.url == '/login') {
        console.log(`Server started at port: ${port}`);
        let readFromFile = new Promise( (res, rej) => {
            fs.readFile( "html-pages/login.html", (err, data) => {
                res(data);
            } );
        }  );
        
        readFromFile.then( data => {
            res.write(data.toString());
            res.end();
        } )
    }
    else if(req.url == '/register') {
        res.write("<h1>Register Page</h1>");
        res.end();
    }
    
    // response.writeHead(200, { 'Content-Type': 'text/html' });
    // console.log(`Server started at port: ${port}`);
    // let readFromFile = new Promise( (res, rej) => {
    //     fs.readFile( "html-pages/login.html", (err, data) => {
    //         res(data);
    //     } );
    // }  );
    
    // readFromFile.then( data => {
    //     response.write(data.toString());
    //     response.end();
    // } )
} ).listen(port);