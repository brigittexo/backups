var mysql = require("mysql");
var secret = "s12xyz00"; //your own secret key

var dbconnect = {
  getConnection: function () {
    var conn = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "sp123456789",
      database: "spmovies",
    });
    return conn;
  },
};
module.exports = dbconnect;
module.exports.key = secret;
