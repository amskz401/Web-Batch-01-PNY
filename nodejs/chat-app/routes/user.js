const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const db_conn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'chat_app'
});
db_conn.connect(() => {
    console.log("Database connected");
});

// check auth
let checkAuth = (req, res, next) => {
    if(req.session.user) {
        req.app.locals = {
            isLoggedIn: req.session.user
        };
        next();
    } else {
        res.redirect("/");
        res.end();
    }
}

// login form
router.get("/", (req, res) => {
    if(req.session.user) {
        res.redirect("/home");
        return res.end();
    }
    res.render("login");
});

// register form
router.get("/register", (req, res) => {
    res.render("register");
});

// process user registration
router.post("/register-user", (req, res) => {
    if(req.body.full_name == "" || req.body.email == "" || req.body.password == "") {
        req.flash("error", "Fill out all the required fields");
        res.redirect("/register");
        return res.end();
    };

    db_conn.query('INSERT INTO `users`(`full_name`, `email`, `password`) VALUES (?,?,?)', [req.body.full_name, req.body.email, req.body.password], function (error, results, fields) {
        if (error) {
            console.log(error);
            req.flash("error", error.sqlMessage());
            res.redirect("/register");
            return res.end();
        } else {
            req.flash("success", "Registration Successfull");
            res.redirect("/");
            return res.end();
            db_conn.end();
        }
    });
});

// process user login
router.post("/login-user", (req, res) => {
    if(req.body.email == "" || req.body.password == "") {
        req.flash("error", "Fill out all the required fields");
        res.redirect("/");
        return res.end();
    };

    db_conn.query('SELECT * FROM `users` WHERE email = ? and password = ?', [req.body.email, req.body.password], function (error, results, fields) {
       
        if(results.length == 0) {
            req.flash("error", "User not found");
            res.redirect("/");
            return res.end();
            db_conn.end();
        } else {
            
            req.session.regenerate( (err) => {
                req.session.user = results;
                req.session.save( (err) => {
                    res.redirect("/home");
                    return res.end();
                    db_conn.end();
                } )
            } );
        }
    });
});


router.get("/home", checkAuth, (req, res) => {
    res.render("dashboard");
});

router.get("/logout", (req, res, next) => {
    req.session.save( (err) => {
        req.session.user = false;
        req.session.regenerate( (err) => {
            res.redirect("/");
            return res.end();
        } )
    } );
});

module.exports = router;