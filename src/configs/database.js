const mysql      = require('mysql2');

const connection = mysql.createConnection({
  host     : 'localhost',
  port     : 3306,
  user     : 'Admin',
  password : 'Rosh1492',
  database : 'sakila',
  insecureAuth : false
});

module.exports = connection;