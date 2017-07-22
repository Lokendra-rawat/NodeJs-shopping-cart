var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');
let product = require('./../models/model');




router.get('/signup', function (req, res, next) {
  var message = req.flash('error');
  res.render('user/signup', {
    csrfToken: req.csrfToken(),
    messages: message
  });
});


router.get('/signin', function (req, res, next) {
  res.render('user/signin', {
    csrfToken: req.csrfToken(),
    flash: req.flash()
  });
});


router.get('/profile', function (req, res, next) {
  res.render('user/profile');
});


router.post('/signup', passport.authenticate('local.signup', {
  successRedirect: '/users/signin',
  failureRedirect: '/users/signup',
  failureFlash: true
}));


router.get('/buy/:id', function (req, res, next) {
  product.find({ _id: req.params.id }, function (err, pro) {
    res.render('buy', {
      pro: pro
    });
  });
});

module.exports = router;
