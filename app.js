var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
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


//var event = new emitter();
//event.on('loki', (data) => { console.log('loki ' + data) });
//event.emit('loki' , "The best programmer");


mongoose.connect('127.0.0.1:27017/cart', function (err) {
  if (err) console.log(err.name + " => " + err.message);
});
require('./config/passport');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup

// app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', expressHbs({ defaultLayout: 'layout', extname: '.hbs' }));
app.set('view engine', '.hbs');

// uncomment after placing your favicon in /public

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
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
