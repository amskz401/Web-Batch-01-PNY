const http = require("http");
const fs = require("fs");

const port = 5000;

http.createServer( (req, res) => {
    if(req.url == '/login'){
        fs.readFile( "html/login.html", ( err, data ) => {
            res.write(data.toString());
            res.end();
        } );
        
    } else if(req.url == '/about-us') {
        fs.readFile( "html/about-us.html", ( err, data ) => {
            res.write(data.toString());
            res.end();
        } );
    }
    else if(req.url == '/contact-us') {
        fs.readFile( "html/contact-us.html", ( err, data ) => {
            res.write(data.toString());
            res.end();
        } );
    }
    else if(req.url == '/process-login') {
        const { headers, method, url } = req;
        let body = [];
        req
        .on('data', chunk => {
            body.push(chunk);
        })
        .on('end', () => {
            body = Buffer.concat(body).toString();
            res.setHeader('Content-Type', 'application/json');
            // Note: the 2 lines above could be replaced with this next one:
            // response.writeHead(200, {'Content-Type': 'application/json'})
            const responseBody = { headers, method, url, body };
            res.write(JSON.stringify(responseBody));
            res.end();
            // at this point, `body` has the entire request body stored in it as a string
        });
    }
    else {
        fs.readFile( "html/home.html", ( err, data ) => {
            res.write(data.toString());
            res.end();
        } );
    }
    
} ).listen( port );