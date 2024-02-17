var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var createRouter = require('./routes/create');
var loginPage = require('./routes/login');
var showEvent = require('./routes/showevents.js');
var allEvent = require('./routes/allevents')
var audienceReg = require('./routes/audience')
var allAudience = require('./routes/allAudience.js')
const cors = require('cors');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/events', createRouter);
app.use('/api/showevents', showEvent);
app.use('/api/allevents', allEvent);
app.use('/api/audience', audienceReg);
app.use('/api/showaudience', allAudience);
app.use('/api/loginevents', loginPage);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
