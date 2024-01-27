const os = require("os");
const fs = require("fs");
const express = require("express");
const browser = require('detect-browser');

const std_router = require("./routes/students");
const router = require("./routes/students");
const app = new express();
app.use("/users", std_router);
const browser_info = browser.detect();


app.use(express.static('public'));
app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 7000;

// app.get('/', (req, res) => {
//     let students = [
//         {
//             id: 1,
//             name: "David",
//             lname: "Miller",
//             email: "davi@m.com"
//         },
//         {
//             id: 2,
//             name: "John",
//             lname: "Wick",
//             email: "john@v.com"
//         },
//         {
//             id: 3,
//             name: "Alia",
//             lname: "Nancy",
//             email: "davi@m.com"
//         },
//         {
//             id: 4,
//             name: "Det",
//             lname: "Ori",
//             email: "det@m.com"
//         },
//     ];
    
//     res.render('index', {'students': students});
// });

let checkUser = (req, res, next) => {
    let user = {};

    user.memory = os.totalmem() / 1024 / 1024 / 1024;
    user.free_memo = os.freemem() / 1024 / 1024 / 1024;
    user.system_n = os.hostname();
    user.mach = os.machine();
    user.pt = os.platform();
    user.v = os.version();
    user.bn = (browser_info.name);
    user.bv = (browser_info.version);
    user.bos = (browser_info.os);
    console.log(user);
    next();
};

app.use(checkUser);
// middleware
app.get("/", (req, res) => {
    res.send("middleware called");
})
app.get("/a", (req, res) => {
    res.send("middleware called");
})

let showErr = (err) => {
    console.log(err);
    router
}
app.get("/b", (req, res) => {

    fs.readFile('/file-does-not-exist', (err, data) => {
        if (err) {
          showErr(err);
        } else {
          res.send(data)
        }
      })
})

app.listen(port);