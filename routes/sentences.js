var express = require('express');
var { to } = require('../utils/helpers');
var { Sentence, Pattern } = require('../models');
var { responseSuccess, responseFail } = require('../utils/helpers');
var router = express.Router();

/* GET sentences listing. */
router.get('/', async function (req, res, next) {
  const [error, sentences] = await to(Sentence.findAll({ include: { model: Pattern, as: 'pattern' } }));
  if (error) {
    return responseFail(res, error);
  }
  return responseSuccess(res, sentences);
});

module.exports = router;
