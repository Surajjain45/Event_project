var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const session = require('express-session');
var logger = require('morgan');
const stripe = require("stripe")("sk_test_51OlwghSExm8g8tzTYZgZiAixHJEkB5yyDkqNMyEgI07c4iuJGR4pd3GeUf3xv9HRBSdrZsfVHRz7WxRequhMmNeu00MIeYzuiC");
// var session = require('express-session')


var forgotpassword = require('./routes/forgotpassword.js')
var indexRouter = require('./routes/index.js');
var usersRouter = require('./routes/users');
var createRouter = require('./routes/create');
var loginPage = require('./routes/login');
var showEvent = require('./routes/showevents.js');
var allEvent = require('./routes/allevents')
var audienceReg = require('./routes/audience')
var allAudience = require('./routes/allAudience.js')
var news = require('./routes/new')
var check = require('./routes/check.js')
var verifyrouter = require('./routes/verify.js')
var password = require('./routes/password.js')
var dashboard_update = require('./routes/dashboard_update.js')
var paymentCheckout = require('./routes/payment.js')
// var eventData = require('./routes/eventData.js')


const cors = require('cors');

// let temporaryData = {}
var app = express();
app.use(session({
  secret: 'your_session_secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true if using HTTPS
}));

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

// to create the event
app.use('/api/events', createRouter);

// to show the details of event
app.use('/api/showevents', showEvent);

// to find all events
app.use('/api/allevents', allEvent);

app.use('/new',news)

// audience registering for an event
app.use('/api/audience', audienceReg);


app.use('/api/showaudience', allAudience);

// organiser accessing its event
app.use('/api/loginevents', loginPage);

app.use('/check',check);

app.use('/verify',verifyrouter)

app.use('/password',password)

app.use('/forgotpassword',forgotpassword)

app.use('/dashboard',dashboard_update)

// for payment checkout
app.use('/api/paymentcheckout' , paymentCheckout)


// app.use('/api/eventdata' , eventData);



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
