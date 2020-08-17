const express = require('express');
const {to} = require('../utils/helpers');
const {Sentence, Pattern} = require('../models');
const {responseSuccess, responseFail} = require('../utils/helpers');
const router = express.Router(); // eslint-disable-line new-cap

/* GET sentences listing. */
router.get('/', async function(req, res, next) {
  const [error, sentences] = await to(Sentence.findAll({include: {model: Pattern, as: 'pattern'}}));
  if (error) {
    return responseFail(res, error);
  }
  return responseSuccess(res, sentences);
});

module.exports = router;
