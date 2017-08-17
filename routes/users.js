var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');
let product = require('./../models/model');


var csrfProtection = csrf();
router.use(csrfProtection);

router.get('/logout', function (req, res, next) {
  req.logout();
  res.redirect('/');
});

router.get('/profile', isLoggedin, function(req, res, next) {
  res.render('user/profile');
});

router.use('/', notLoggedin, function (rea, res, next) {
  next();
});

router.get('/signup', function(req, res, next) {
  var message = req.flash('error');
  res.render('partials/signup', {
    csrfToken: req.csrfToken(),
    messages: message,
    displayForm: true
  });
});

router.post('/signup', passport.authenticate('local.signup', {
  successRedirect: '/users/signin',
  failureRedirect: '/users/signup',
  failureFlash: true
}));

router.get('/signin', function(req, res, next) {
  var message = req.flash('error');
  res.render('partials/signin', {
    csrfToken: req.csrfToken(),
    messages: message,
    displayForm: true
  });
});

router.post('/signin', passport.authenticate('local.signin', {
  successRedirect: '/users/profile',
  failureRedirect: '/users/signin',
  failureFlash: true
}));

router.get('/buy/:id', function(req, res, next) {
  product.find({ _id: req.params.id }, function(err, pro) {
    res.render('buy', {
      pro: pro
    });
  });
});

module.exports = router;

function isLoggedin(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}

function notLoggedin(req, res, next) {
  if (!req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}
