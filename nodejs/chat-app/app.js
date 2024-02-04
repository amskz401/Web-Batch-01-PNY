const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const expressLayouts = require("express-ejs-layouts");
const session = require("express-session");
const flash = require("express-flash");


const app = express();
const server = createServer(app);
const io = new Server(server);

// layouts configurations
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('layout', './layouts/main');

// form configuration
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// session configuration
app.use(session({
    secret: "My_Chat_App",
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 // 1hour
    }
}));

// flash message
app.use(flash());

// initialize user
app.use( (req, res, next) => {
    req.app.locals = {
        isLoggedIn: false
    };
    next();
} );

// user handling routes
app.use('/', require('./routes/user'));

// input/output connection
io.on("connection", (socket) => {
    
    // notify to all users
    socket.on("join-chat", (user) => {
        let message = `${user} Joined the chat`;
        socket.broadcast.emit("join-chat", message);
    });
    
    // send message
    socket.on("send", (userMsg) => {
        console.log(userMsg);
        io.emit("send", userMsg);
    });
});

server.listen(3000);