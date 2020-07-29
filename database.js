
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '172.20.0.2',
  user: 'minhkl',
  password: 'password',
  database: 'justspeakdb',
  port: '3306',
  insecureAuth: true
});

module.exports = connection;
