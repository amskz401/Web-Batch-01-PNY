const express = require("express");
const router = express.Router();

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

router.get('/', (req, res) => {
    res.render('index', {'students': students});
})
router.get('/add', (req, res) => {
    
    res.render('add');
});

router.post('/add-student', (req, res) => {
    console.log(req.body);
    res.json(req.body);
});

router.get('/edit/:id', (req, res) => {
    let rec = students.find( student => student.id == req.params.id );
    res.render("edit", { "student": rec });
})

module.exports = router;