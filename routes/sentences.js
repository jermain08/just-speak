var express = require('express');
var database = require('../database');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {

  database.query('SELECT * FROM sentence_models', function (error, results, fields) {
    if (error) {
      res.status(500).json({
        error: error,
      });
    } else {
      res.json({ data: results });
    }

  })

});

module.exports = router;
