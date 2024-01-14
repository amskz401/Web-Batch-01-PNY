const fs = require('node:fs');

// console.log("before file");

// fs.writeFile("abc.txt", "add some data to this file", () => {
//     console.log("creating file");
// });

// console.log("after file");

// let data = fs.readFileSync("abc.txt", "utf-8");

let readFromFile = new Promise( (res, rej) => {
    fs.readFile( "abc.txt", (err, data) => {
        res(data);
    } );
}  );

readFromFile.then( data => {
    console.log(data.toString());
} )