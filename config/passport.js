var passport = require('passport');
var User = require('../models/user');
var localStrategy = require('passport-local').Strategy;
var passwordHash = require('password-hash');

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use('local.signup', new localStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true,

}, function (req, email, password, done) {
  User.findOne({ 'email': email }, function (err, user) {
    if (err) {
      return done(err);
    }
    if (user) {
      return done(null, false, { message: 'email is already in use' });
    }
    if (password.length < 7) {
      return done(null, false, { message: 'Password must be 6 characters long' });
    }
    var newUser = new User();
    newUser.email = email;
    newUser.password = passwordHash.generate(password);
    newUser.save(function (err, result) {
      if (err) {
        return done(err);
      }
      return done(null, newUser);
    })
  })
}))