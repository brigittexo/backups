var dbConfig = require("./databaseConfig");
var jwt = require("jsonwebtoken");
var config = require("../config/config");
var bcrypt = require("bcryptjs");

var db = {
  //Retrieve all Users record
  getUsers: function (callback) {
    var dbConn = dbConfig.getConnection();

    dbConn.connect(function (err) {
      if (err) {
        return callback(err, null);
      } else {
        var sql = "select * from user";

        dbConn.query(sql, [], function (err, results) {
          dbConn.end();
          return callback(err, results);
        });
      }
    });
  },
  //Retrieve a User record
  get1User: function (userID, callback) {
    var dbConn = dbConfig.getConnection();

    dbConn.connect(function (err) {
      if (err) {
        return callback(err, null);
      } else {
        var sql = "select * from user where userID=?";

        dbConn.query(sql, [userID], function (err, results) {
          dbConn.end();
          return callback(err, results);
        });
      }
    });
  },
  //Insert data into Users record
  insertUser: function (name, email, role, password, callback) {
    var dbConn = dbConfig.getConnection();

    dbConn.connect(function (err) {
      if (err) {
        console.log(err);
        return callback(err, null);
      } else {
        bcrypt.hash(password, 10, function (err, hash) {
          if (err) {
            console.log(err);
            return callback(err, null);
          } else {
            password = hash;
            console.log("Connected!");
            var sql =
              "insert into user(name,email,role,password) values(?,?,?,?)";
            dbConn.query(
              sql,
              [name, email, role, password],
              function (err, results) {
                dbConn.end();
                return callback(err, results);
              }
            );
          }
        });
      }
    });
  },

  //Update data into Users record
  updateUser: function (email, password, userID, callback) {
    var dbConn = dbConfig.getConnection();

    dbConn.connect(function (err) {
      if (err) {
        return callback(err, null);
      } else {
        var sql = "update user set email=?,password=? where userID=?";

        dbConn.query(sql, [email, password, userID], function (err, results) {
          dbConn.end();
          return callback(err, results);
        });
      }
    });
  },
  //Delete data into Users record
  deleteUser: function (userID, callback) {
    var dbConn = dbConfig.getConnection();

    dbConn.connect(function (err) {
      if (err) {
        return callback(err, null);
      } else {
        var sql = "delete from user where userID=?";

        dbConn.query(sql, [userID], function (err, results) {
          dbConn.end();
          return callback(err, results);
        });
      }
    });
  },

  //Login User
  loginUser: function (email, password, callback) {
    var dbConn = dbConfig.getConnection();

    dbConn.connect(function (err) {
      if (err) {
        return callback(err, null);
      } else {
        var sql = "select * from user where email=? and password=?";

        dbConn.query(sql, [email, password], function (err, results) {
          dbConn.end();

          var token = "";
          if (results.length == 1) {
            //imply such a user was found

            token = jwt.sign(
              { "userID": results[0].userID, "role": results[0].role },
              config.secretKey,
              { expiresIn: 43200 }
            );
          }

          return callback(null, token);
        });
      }
    });
  },
};

module.exports = db;
