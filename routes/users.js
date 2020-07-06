var express = require('express');
var database = require('../database');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {

  database.query('SELECT * FROM sentence_models', function (error, results, fields) {

    res.json({ data: results });
  })

});

module.exports = router;
