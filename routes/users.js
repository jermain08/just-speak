const express = require('express');
const {to} = require('../utils/helpers');
const router = express.Router(); // eslint-disable-line new-cap
const {User, Role} = require('../models');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const [error, users] = await to(User.findAll({include: {model: Role, as: 'role'}}));
  if (!!error) {
    return res.json({success: false, error: error});
  }
  return res.json({success: true, data: users});
});

module.exports = router;
