
var mysql = require('mysql');
var dotenv = require('dotenv');
dotenv.config();

var connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  port: process.env.DATABASE_PORT,
  insecureAuth: true
});

module.exports = connection;
