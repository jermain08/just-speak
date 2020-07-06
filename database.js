
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'RootRoot',
  database: 'gospeak',
  insecureAuth: true
});

module.exports = connection;
