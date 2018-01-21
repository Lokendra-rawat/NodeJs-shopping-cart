var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressHbs = require('express-handlebars');
var compression = require('compression');
var mongodb = require('mongoose');

var index = require('./routes/index');
var users = require('./routes/users');
var xhr = require('./routes/xhr');

var app = express();

mongodb.connect('mongodb://127.0.0.1:27017/populate', {
  useMongoClient: true
}, function (err) {
  if (err) throw err;
});

// view engine setup

app.use(function (req, res, next) {
  // res.sendStatus(200);
  next();
});

app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', expressHbs({
  defaultLayout: 'layout',
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use(function (req, res, next) {
//   console.log(req.params);
//   console.log(req.query);
//   next();
// });

app.use('/', index);
app.use('/users', users);
app.use('/xhr', xhr);

// catch 404 and forward to error handler

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err, req);
});

// error handler

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;