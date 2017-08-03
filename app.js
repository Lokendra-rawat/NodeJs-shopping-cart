var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
// var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
//var emitter = require('events');
var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');
var passwordHash = require('password-hash');
var expressHbs = require('express-handlebars');
var mongoStore = require('connect-mongo')(session);


//console.log(passwordHash.verify('loki', 'sha1$b1b7e59f$1$5c3cc682a9d2afccd48d7bc324087b146a70d5b1'));
//mongodb://<dbuser>:<dbpassword>@ds115573.mlab.com:15573/cart

//mongoose.connect('mongodb://127.0.0.1:27017/cart', function (err) {
// if (err) console.log(err.name + " => " + err.message);
//});

  mongoose.connect('mongodb://lokendra:mlab@ds115573.mlab.com:15573/cart', function (err) {
 if (err) console.log(err.name + " => " + err.message);
  });

require('./config/passport');

var index = require('./routes/index');
var users = require('./routes/users');
var checkout = require('./routes/checkout');

var app = express();

// view engine setup

// app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', expressHbs({ defaultLayout: 'layout', extname: '.hbs' }));
app.set('view engine', '.hbs');
// hello this was edited from vim text editor nigga
// uncomment after placing your favicon in /public

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'mysupersecret',
  resave: false,
  saveUninitialized: false,
  store: new mongoStore({ mongooseConnection: mongoose.connection }),
  cookie: { maxAge: 60 * 60 * 1000 }
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

// app.use(cookieParser('keyboard cat'));
//app.use(session({ cookie: { maxAge: 60000 } }));


app.use('/', index);
app.use('/users', users);
app.use('/checkouts', checkout);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.locals.session = req.session;
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
