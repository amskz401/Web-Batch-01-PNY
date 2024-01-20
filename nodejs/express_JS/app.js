const express = require("express");
const app = new express();
const router = express.Router();
app.use('/', router);

app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 7000;

// Gloabl Middleware
let checkUser = (req, res, next) => {
    res.render('404');
    // next();
}
// app.use(checkUser);

// Route Middleware

app.get('/route-midd', checkUser, (req, res) => {
    res.send("<h1>Route Level Middleware");
});

// Group Middleware


app.get('/', (req, res) => {
    let students = [
        {
            id: 1,
            name: "David",
            lname: "Miller",
            email: "davi@m.com"
        },
        {
            id: 2,
            name: "John",
            lname: "Wick",
            email: "john@v.com"
        },
        {
            id: 3,
            name: "Alia",
            lname: "Nancy",
            email: "davi@m.com"
        },
        {
            id: 4,
            name: "Det",
            lname: "Ori",
            email: "det@m.com"
        },
    ];
    
    res.render('index', {'students': students});
})
app.get('/add', (req, res) => {
    
    res.render('add');
});

app.post('/add-student', (req, res) => {
    console.log(req.body);
    res.json(req.body);
});

router.get("/grp-route-1", (req, res) => {
    res.send("Group Route Example");
})
router.get("/grp-route-2", (req, res) => {
    res.send("Group Route Example");
})
router.get("/grp-route-3", (req, res) => {
    res.send("Group Route Example");
})
router.get("/grp-route-4", (req, res) => {
    res.send("Group Route Example");
});

app.listen(port);