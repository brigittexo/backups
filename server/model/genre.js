var dbConfig = require("./databaseConfig");
var genre = {
  //Retrieve all Genre record
  getGenre: function (callback) {
    var dbConn = dbConfig.getConnection();

    dbConn.connect(function (err) {
      if (err) {
        return callback(err, null);
      } else {
        var sql = "select * from genre";

        dbConn.query(sql, [], function (err, results) {
          dbConn.end();
          return callback(err, results);
        });
      }
    });
  },
  //Update data into Genre record
  updateGenre: function (name, description, genreID, callback) {
    var dbConn = dbConfig.getConnection();

    dbConn.connect(function (err) {
      if (err) {
        return callback(err, null);
      } else {
        var sql = "update genre set name=?,description=? where genreID=?";

        dbConn.query(
          sql,
          [name, description, genreID],
          function (err, results) {
            dbConn.end();
            return callback(err, results);
          }
        );
      }
    });
  },
  //Retrieve a Genre record
  getGenreSingle: function (genreID, callback) {
    var dbConn = dbConfig.getConnection();

    dbConn.connect(function (err) {
      if (err) {
        return callback(err, null);
      } else {
        var sql = "select * from genre where genreID=?";

        dbConn.query(sql, [genreID], function (err, results) {
          dbConn.end();
          return callback(err, results);
        });
      }
    });
  },
  //Insert data into Genre record
  insertGenre: function (name, description, callback) {
    var dbConn = dbConfig.getConnection();

    dbConn.connect(function (err) {
      if (err) {
        return callback(err, null);
      } else {
        var sql = "insert into genre (name,description) values(?,?)";

        dbConn.query(sql, [name, description], function (err, results) {
          dbConn.end();
          return callback(err, results);
        });
      }
    });
  },
  //Delete data in Genre record
  deleteGenre: function (genreID, callback) {
    var dbConn = dbConfig.getConnection();

    dbConn.connect(function (err) {
      if (err) {
        return callback(err, null);
      } else {
        var sql = "delete from genre where genreID=?";

        dbConn.query(sql, [genreID], function (err, results) {
          dbConn.end();
          return callback(err, results);
        });
      }
    });
  },
};

module.exports = genre;
