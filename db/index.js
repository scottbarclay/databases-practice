const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'FILL ME IN',
  user: 'FILL ME IN',
  database: 'FILL ME IN',
  multipleStatements: true
  // multipleStatements for the tests - generally not a great idea
});

module.exports = connection;