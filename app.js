const express = require('express');
const path = require('path');
const jwt = require('express-jwt');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const sentencesRouter = require('./routes/sentences');
const authRouter = require('./routes/auth');
const {responseFail} = require('./utils/helpers');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(jwt({secret: process.env.JWT_SECRET, algorithms: ['HS256']}).unless({path: ['/auth']}));
app.use(function(err, req, res, next) {
  if (err && err.name === 'UnauthorizedError') {
    return responseFail(res, 'Invalid Token', 401);
  }
  next();
});

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/sentences', sentencesRouter);

module.exports = app;
