const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const Strategy = require('passport-local').Strategy;
const db = require("./db");
const app = express();

app.set("port", process.env.PORT || 3001);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("auth-system/build"));
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
    cors({
        origin: "http://localhost:3000", // <-- location of the react app were connecting to
        credentials: true,
    })
);

app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new Strategy(
    function(username, password, cb) {
        db.users.findByUsername(username, function(err, user) {
            if (err) { return cb(err); }
            if (!user) { return cb(null, false); }
            if (password != user.password) { return cb(null, false); }
            console.log(user);
            return cb(null, user);
        });
    }
));

passport.serializeUser(function(user, cb) {
    cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
    db.users.findById(id, function(err, user) {
        if (err) { return cb(err); }
        cb(null, user);
    });
});

app.post("/newUser", (req, res) => {
    db.users.findByUsername(req.body.username, function(err, user) {
        if (err) { return cb(err); }
        if (!user) {
            db.users.AddUser(req.body);
            res.send(true);
        } else {
            res.send(false);
        }
    })
})

app.post("/login", passport.authenticate('local', { failureRedirect: '/' }),
    function(req, res) {
        console.log(req.user);
        res.send(req.user);
    });

app.get('/getUser',
    require('connect-ensure-login').ensureLoggedIn(),
    function(req, res) {
        console.log(req.user);
        res.send(req.user);
    });

app.get('/signout',
    function(req, res) {
        req.session.destroy(function(err) {
            console.log('out');
            req.logout();
        });
    });

app.listen(app.get("port"), () => {
    console.log(`Find the server at: http://localhost:${app.get("port")}/`)
})