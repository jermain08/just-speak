const express = require('express');
const path = require('path');
const jwt = require('express-jwt');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const sentencesRouter = require('./routes/sentences');
const authRouter = require('./routes/auth');
const {responseFail} = require('./utils/helpers');

const app = express();

const allowOrigin = ['http://127.0.0.1:5500', 'http://localhost:3000'];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowOrigin.includes(origin)) {
      return callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(jwt({secret: process.env.JWT_SECRET, algorithms: ['HS256']}).unless({path: ['/auth/login', '/auth/test']}));
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
