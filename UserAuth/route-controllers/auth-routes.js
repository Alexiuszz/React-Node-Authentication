const router = require('express').Router();
const passport = require('passport');
const bcrypt = require('bcrypt');
const connectEnsureLogin = require('connect-ensure-login');
const Merchant = require('../db/models/merchant-model');
const Courier = require('../db/models/courier-model');
const cors = require('cors');

router.post('/new-courier', (req, res) => {
    Courier.findOne({ email: req.body.email })
        .then((currentUser) => {
            if (currentUser) {
                res.send(false);
            } else {
                Merchant.findOne({ email: req.body.email })
                    .then((currentUser) => {
                        if (currentUser) {
                            res.send(false);
                        } else {
                            const saltRounds = 5;

                            //Encrpyt password before saving
                            bcrypt.hash(req.body.password, saltRounds).then(function(hash) {
                                new Courier({
                                    email: req.body.email,
                                    hash: hash,
                                    companyName: req.body.companyName
                                }).save().then((newUser) => {
                                    res.send(newUser);
                                })
                            });
                        }

                    }).catch((err) => console.log(err));
            }

        }).catch((err) => console.log(err));

});

router.post('/new-merchant', (req, res) => {
    Courier.findOne({ email: req.body.email })
        .then((currentUser) => {
            if (currentUser) {
                res.send(false);
            } else {
                Merchant.findOne({ email: req.body.email })
                    .then((currentUser) => {
                        if (currentUser) {
                            res.send(false);
                        } else {
                            const saltRounds = 5;

                            //Encrpyt password before saving
                            bcrypt.hash(req.body.password, saltRounds).then(function(hash) {
                                new Merchant({
                                    email: req.body.email,
                                    hash: hash,
                                    companyName: req.body.companyName
                                }).save().then((newUser) => {
                                    res.send(newUser);
                                })
                            });
                        }

                    }).catch((err) => console.log(err));
            }

        }).catch((err) => console.log(err));

});

router.post("/login", passport.authenticate('local', { failureRedirect: '/' }),
    function(req, res) {
        console.log(req.user);
        res.send(req.user);
    });

router.get('/signout',
    function(req, res) {
        req.session.destroy(function(err) {
            console.log('out');
            req.logout();
        });
    });

module.exports = router;