const express = require('express');
const {to} = require('../utils/helpers');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const router = express.Router(); // eslint-disable-line new-cap
const {User, Role} = require('../models');
const {responseSuccess, responseFail, responseInvalidParams} = require('../utils/helpers');

const validateParams = (req, res, next) => {
  const {username, password} = req.body;
  if (!username || !password) {
    const fields = {
      username: !username ? 'required' : undefined,
      password: !password ? 'required' : undefined,
    };
    return responseInvalidParams(res, fields);
  }
  next();
};

router.post('/login', validateParams, async function(req, res, next) {
  const {username, password} = req.body;

  const [error, user] = await to(User.findOne({
    where: {username},
    include: {
      model: Role,
      as: 'role',
    },
  }));

  if (error) {
    return responseFail(res, error);
  }

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return responseFail(res, 'Invalid username or password', 401);
  }

  const token = jsonwebtoken.sign({
    username: user.username,
    role: user.role ? user.role.name : '',
  }, process.env.JWT_SECRET);

  return responseSuccess(res, {token});
});

router.post('/user', async function(req, res, next) {
  if (!req.user) {
    return responseFail(res, 'Invalid token');
  }
  const username = req.user.username;

  const [error, user] = await to(User.findOne({
    where: {username},
    include: {
      model: Role,
      as: 'role',
    },
  }));

  if (error) {
    return responseFail(res, error);
  }

  return responseSuccess(res, {user});
});

router.post('/test', async function(req, res) {
  return responseSuccess(res, {success: true});
});

module.exports = router;
