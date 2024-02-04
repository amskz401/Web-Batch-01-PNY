const mongoose = require('mongoose');
const flash = require('express-flash');
const session = require('express-session');
// const cookieParser = require('cookie-parser');
const validator = require("email-validator");
const User = require("./server/userSchema");
const express = require("express");
const jwt = require('jsonwebtoken');
const multer  = require('multer')
const path = require("path");

const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'laravel_db'
});
 
connection.connect( (err) => {
  if(err == null)
    console.log("database connected");
} );


mongoose.connect('mongodb://127.0.0.1:27017/manageusers')
  .then(() => console.log('Connected!'));

const app = new express();
app.use(express.static('public'))
app.use(express.static('uploads'))
app.set('view engine', 'ejs')

// get data from url or form
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(express.cookieParser('myLoginSecret'));
// app.use(express.session({ cookie: { maxAge: 60000 }}));
app.use(session({
  secret: 'myLoginSecret',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 60 }
}));

app.use(flash());


// defualt route
app.get('/', (req, res) => {
  res.render("home");
});

// middleware to test if authenticated
function isAuthenticated (req, res, next) {
  if (req.session.user) {
    next();
  }
  else {
    res.redirect("login");
  }
}


// login 
app.get("/login", (req, res) => {
  if(req.session.user) {
    res.redirect("dashboard");
  } else {
    res.render("login");
  }
  
});

// check Login
app.post("/login", (req, res)  => {
  User.findOne(req.body).then( user => {
    if(user) {
      req.session.regenerate(function (err) {
        if (err) next(err)
    
        // store user information in session, typically a user id
        req.session.user = user;
    
        // save the session before redirection to ensure page
        // load does not happen before session is saved
        req.session.save(function (err) {
          if (err) return next(err)
          res.redirect("dashboard");
        })
      })
      
    } else {
      req.flash("error", "Invalid login credentials");
      res.redirect("login");
    }
    
  } );
})

// check Login
app.post("/api/login", (req, res)  => {
  User.findOne(req.body).then( user => {
    if(user) {
      jwt.sign({
        data: user
      }, 'apiSecret', { expiresIn: 60 * 60 }, (err, token) => {
        if(!err) 
        res.send(token);
      });
    } else {
      let error = {
        bit: 0,
        message: "User not found"
      }
      res.send(error);
    }

    
  } );
})

// register 
app.get("/register", (req, res) => {
  res.render("register");
})

// register-user
app.post("/register", (req, res) => {
  let error = false;
  if(req.body.first_name.trim() === '') {
    let error = true;
    req.flash("fn_err", "First Name is required");
  }

  if(!validator.validate(req.body.email)) {
    let error = true;
    req.flash("em_err", "Email is not valid");
  }
  console.log(req.body.first_name);
  if(error) {
    res.send(req.body);
  }

  // try {
  //   const addUser = new User(req.body);
  //   addUser.save().then( data => {
  //     req.flash("success", "Registration Successfull Login Below");
  //     res.redirect("login");
  //   } );
  // } catch (error) {
  //   res.send(error);
  // }
})

app.get("/dashboard", isAuthenticated, (req, res) => {
  res.render("dashboard");
})

app.get("/logout", isAuthenticated, (req, res) => {
  req.session.user = '';
  // save the session before redirection to ensure page
  // load does not happen before session is saved
  req.session.save(function (err) {
    if (err) return next(err)
    res.redirect("login");
  })
});

// Users Routes
app.use('/users', require('./routes/users'));

// Products Routes
app.use('/product', require('./routes/product'));
// Orders Routes

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname+'/uploads')
  },
  filename: function (req, file, cb) {
    let ext = path.extname(file.originalname);
    const uniqueSuffix = file.fieldname + '_' + Date.now() + ext;
    cb(null, uniqueSuffix)
  }
});
const upload = multer({ storage: storage });

app.get("/file-upload", (req, res) => {
  res.render("file-upload");
});

app.post("/add-file", upload.single("my_file"), (req, res) => {
  connection.query('INSERT INTO `users`(`name`, `email`, `image`) VALUES (?,?,?)', ['test', 'test@email', req.file.filename], function (error, results, fields) {
    if (error) throw error;
    res.render("users-list", {data: results});
  });
  res.send(req.file.filename);
});

app.get('/users-list', (req, res) => {
  
  connection.query('SELECT * FROM `users` where 1', function (error, results, fields) {
    if (error) throw error;
    res.render("users-list", {data: results});
  });
})
app.get('/user-details/:id', (req, res) => {
  
  connection.query('SELECT * FROM `users` where id = ?', [ req.params.id ], function (error, results, fields) {
    if (error) throw error;

    console.log(results);
    res.render("user-details", {data: results[0]});
  });
})

app.listen(4000);