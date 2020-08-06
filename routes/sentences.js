var express = require('express');
var { to } = require('await-to-js');

var database = require('../database');
var { Sentence, Pattern } = require('../models');
var router = express.Router();

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const [error, sentences] = await to(Sentence.findAll({ include: { model: Pattern, as: 'pattesrn' }, }));

  if (error) {
    return res.status(500).json({
      success: false,
      error: error,
    })
  }
  return res.status(200).json({
    success: true,
    sentences: sentences,
  });
});

module.exports = router;
