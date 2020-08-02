var express = require('express');
var { to } = require('await-to-js');
var router = express.Router();
var { User } = require('../models');

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const [error, users] = await to(User.findAll());
  if (!!error) {
    return res.json({ success: false, error: error });
  }
  return res.json({ success: true, data: users });

});

module.exports = router;
