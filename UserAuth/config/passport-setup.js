const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const db = require("../db");


passport.serializeUser(function(user, cb) {
    cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
    db.users.findById(id, function(err, user) {
        if (err) { return cb(err); }
        cb(null, user);
    });
});

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