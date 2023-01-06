var dbConfig = require("./databaseConfig");
var movie = {
  //Get all Movies record
  getMovies: function (callback) {
    var dbConn = dbConfig.getConnection();

    dbConn.connect(function (err) {
      if (err) {
        return callback(err, null);
      } else {
        var sql = "select * from movie";

        dbConn.query(sql, [], function (err, results) {
          dbConn.end();
          return callback(err, results);
        });
      }
    });
  },
  //Get a Movie record
  getMoviesSingle: function (movieID, callback) {
    var dbConn = dbConfig.getConnection();

    dbConn.connect(function (err) {
      if (err) {
        return callback(err, null);
      } else {
        var sql = "select * from movie where movieID=?";

        dbConn.query(sql, [movieID], function (err, results) {
          dbConn.end();
          return callback(err, results);
        });
      }
    });
  },

  //Retrieve Movie record from Genre ID sorted by ascending release date
  getMoviesGenreIDASC: function (genreID, callback) {
    var dbConn = dbConfig.getConnection();

    dbConn.connect(function (err) {
      if (err) {
        return callback(err, null);
      } else {
        //var sql = "select * from movie where movieID=?";
        // var sql = "select * from movie m, genre g where c.cat_id= f.cat_id and c.cat_id=?";
        var sql =
          "select * from movie m, genre g where m.genreID = g.genreID and m.genreID =? order by m.name asc;";

        dbConn.query(sql, [genreID], function (err, results) {
          dbConn.end();
          return callback(err, results);
        });
      }
    });
  },

  //Retrieve movie from column name 'active' from value 'Y' and value 'y'
  getMoviesActive: function (callback) {
    var dbConn = dbConfig.getConnection();

    dbConn.connect(function (err) {
      if (err) {
        return callback(err, null);
      } else {
        var sql = "select * from movie where active='y' or active='Y'";

        dbConn.query(sql, [], function (err, results) {
          dbConn.end();
          return callback(err, results);
        });
      }
    });
  },

  //Insert data into Movie Record
  insertMovie: function (
    name,
    description,
    releasedate,
    imageURL,
    genreID,
    active,
    dateinserted,
    callback
  ) {
    var dbConn = dbConfig.getConnection();

    dbConn.connect(function (err) {
      if (err) {
        return callback(err, null);
      } else {
        var sql =
          "insert into movie(name,description,releasedate,imageURL,genreID,active,dateinserted) values(?,?,?,?,?,?,?)";

        dbConn.query(
          sql,
          [
            name,
            description,
            releasedate,
            imageURL,
            genreID,
            active,
            dateinserted,
          ],
          function (err, results) {
            dbConn.end();
            return callback(err, results);
          }
        );
      }
    });
  },

  //Update data into Movie Record
  updateMovie: function (
    name,
    description,
    releasedate,
    imageURL,
    genreID,
    active,
    dateinserted,
    movieID,
    callback
  ) {
    var dbConn = dbConfig.getConnection();

    dbConn.connect(function (err) {
      if (err) {
        return callback(err, null);
      } else {
        var sql =
          "update movie set name=?,description=?,releasedate=?,imageURL=?,genreID=?,active=?,dateinserted=? where movieID=?";

        dbConn.query(
          sql,
          [
            name,
            description,
            releasedate,
            imageURL,
            genreID,
            active,
            dateinserted,
            movieID,
          ],
          function (err, results) {
            dbConn.end();
            return callback(err, results);
          }
        );
      }
    });
  },

  //Delete data in Movie Record
  deleteMovie: function (movieID, callback) {
    var dbConn = dbConfig.getConnection();

    dbConn.connect(function (err) {
      if (err) {
        return callback(err, null);
      } else {
        var sql = "delete from movie where movieID=?";

        dbConn.query(sql, [movieID], function (err, results) {
          dbConn.end();
          return callback(err, results);
        });
      }
    });
  },
};

module.exports = movie;
