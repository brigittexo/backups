var express = require("express");
var bodyParser = require("body-parser");
var userDB = require("../model/user");
var movieDB = require("../model/movie");
var genreDB = require("../model/genre");
var verificationLib = require("../auth/verifyToken");
var cors = require("cors");
var validationFn = require("../validation/validationFn");

var app = express();

app.options("*", cors());
app.use(cors());

var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(urlencodedParser); //attach body-parser middleware
app.use(bodyParser.json()); //parse json data

//Add new data into Movie record
app.post(
  "/movie",
  verificationLib.verifyToken,
  verificationLib.verifyAdmin,
  function (req, res) {
    var name = req.body.name;
    var description = req.body.description;
    var releasedate = req.body.releasedate;
    var imageURL = req.body.imageURL;
    var genreID = req.body.genreID;
    var active = req.body.active;
    var dateinserted = req.body.dateinserted;

    movieDB.insertMovie(
      name,
      description,
      releasedate,
      imageURL,
      genreID,
      active,
      dateinserted,
      function (err, results) {
        if (err) {
          console.log(err);
          res.status(500);
          res.type("json");
          res.send(`{"Message":"Insertion failed"}`);
        } else {
          console.log(results);
          res.status(200);
          res.type("json");
          res.send(`{"Message":"${results.affectedRows} row(s) inserted"}`);
        }
      }
    );
  }
);

//Retrieve a Genre record by it's ID
app.get("/movie/genre/:genreID", function (req, res) {
  var genreID = req.params.genreID;
  movieDB.getMoviesGenreIDASC(genreID, function (err, results) {
    if (err) {
      console.log(err);
      res.status(500);
      res.type("json");
      res.send(`{"Message":"Insertion failed"}`);
      res.send(req.params);
    } else {
      res.status(200);
      res.type("json");
      res.send(results);
    }
  });
});

//Retrieve all Movie records
app.get("/movies", function (req, res) {
  movieDB.getMovies(function (err, results) {
    if (err) {
      console.log(err);
      res.status(500);
      res.type("json");
      res.send(`{"Message":"Retrieval failed"}`);
    } else {
      res.status(200);
      res.type("json");
      res.send(results);
    }
  });
});

//Retrieve a Movie record by it's ID
app.get("/movie/:movieID", function (req, res) {
  var movieID = req.params.movieID;
  movieDB.getMoviesSingle(movieID, function (err, results) {
    if (err) {
      console.log(err);
      res.status(500);
      res.type("json");
      res.send(`{"Message":"Retrieval failed"}`);
    } else {
      res.status(200);
      res.type("json");
      res.send(results);
    }
  });
});

//Update a Movie record by it's ID
app.put(
  "/movie/:movieID",
  verificationLib.verifyToken,
  verificationLib.verifyAdmin,
  function (req, res) {
    var movieID = req.params.movieID;
    var name = req.body.name;
    var description = req.body.description;
    var releasedate = req.body.releasedate;
    var imageURL = req.body.imageURL;
    var genreID = req.body.genreID;
    var active = req.body.active;
    var dateinserted = req.body.dateinserted;

    movieDB.updateMovie(
      name,
      description,
      releasedate,
      imageURL,
      genreID,
      active,
      dateinserted,
      movieID,
      function (err, results) {
        if (err) {
          console.log(err);
          res.status(500);
          res.type("json");
          res.send(`{"Message":"Update failed"}`);
        } else {
          console.log(results);
          res.status(200);
          res.type("json");
          res.send(`{"Message":"${results.affectedRows} row(s) updated"}`);
        }
      }
    );
  }
);

//Retrieve now present Movies record
app.get("/moviesactive", function (req, res) {
  movieDB.getMoviesActive(function (err, results) {
    if (err) {
      console.log(err);
      res.status(500);
      res.type("json");
      res.send(`{"Message":"Retrieval failed"}`);
    } else {
      res.status(200);
      res.type("json");
      res.send(results);
    }
  });
});

//Delete a movie record by using it's ID
app.delete(
  "/movie/:movieID",
  verificationLib.verifyToken,
  verificationLib.verifyAdmin,
  function (req, res) {
    var movieID = req.params.movieID;
    movieDB.deleteMovie(movieID, function (err, results) {
      if (err) {
        console.log(err);
        res.status(500);
        res.type("json");
        res.send(`{"Message":"Delete failed"}`);
      } else {
        res.status(200);
        res.type("json");
        res.send(`{"Message":"${results.affectedRows} row(s) deleted"}`);
      }
    });
  }
);

//Retrieve all Genre records
app.get("/genres", function (req, res) {
  genreDB.getGenre(function (err, results) {
    if (err) {
      console.log(err);
      res.status(500);
      res.type("json");
      res.send(`{"Message":"Retrieval failed"}`);
    } else {
      res.status(200);
      res.type("json");
      res.send(results);
    }
  });
});

//Update new genre record(s)
app.put(
  "/genre/:genreID",
  verificationLib.verifyToken,
  verificationLib.verifyAdmin,
  function (req, res) {
    var genreID = req.params.genreID;
    var name = req.body.name;
    var description = req.body.description;

    genreDB.updateGenre(name, description, genreID, function (err, results) {
      if (err) {
        console.log(err);
        res.status(500);
        res.type("json");
        res.send(`{"Message":"Update failed"}`);
      } else {
        console.log(results);
        res.status(200);
        res.type("json");
        res.send(`{"Message":"${results.affectedRows} row(s) updated"}`);
      }
    });
  }
);

//Retrieve all Genre records by it's ID
app.get("/genre/:genreID", function (req, res) {
  var genreID = req.params.genreID;
  genreDB.getGenreSingle(genreID, function (err, results) {
    if (err) {
      console.log(err);
      res.status(500);
      res.type("json");
      res.send(`{"Message":"Can't retrieve genre"}`);
    } else {
      res.status(200);
      res.type("json");
      res.send(results);
    }
  });
});

//Insert new Genre records
app.post(
  "/genre",
  verificationLib.verifyToken,
  verificationLib.verifyAdmin,
  function (req, res) {
    var name = req.body.name;
    var description = req.body.description;

    genreDB.insertGenre(
      name,
      description,

      function (err, results) {
        if (err) {
          console.log(err);
          res.status(500);
          res.type("json");
          res.send(`{"Message":"Insertion failed"}`);
        } else {
          console.log(results);
          res.status(200);
          res.type("json");
          res.send(`{"Message":"${results.affectedRows} row(s) inserted"}`);
        }
      }
    );
  }
);

//Delete new Genre record(s)
app.delete(
  "/genre/:genreID",
  verificationLib.verifyToken,
  verificationLib.verifyAdmin,
  function (req, res) {
    var genreID = req.params.genreID;
    genreDB.deleteGenre(genreID, function (err, results) {
      if (err) {
        console.log(err);
        res.status(500);
        res.type("json");
        res.send(`{"Message":"Delete failed"}`);
      } else {
        res.status(200);
        res.type("json");
        res.send(`{"Message":"${results.affectedRows} row(s) deleted"}`);
      }
    });
  }
);

/*//Retrieve all users record
app.get("/users", function (req, res) {
  userDB.getUsers(function (err, results) {
    if (err) {
      console.log(err);
      res.status(500);
      res.type("json");
      res.send(`{"Message":"Retrieval failed"}`);
    } else {
      res.status(200);
      res.type("json");
      res.send(results);
    }
  });
});*/

//GET /user
//assume this is a protected resource that requires user login
app.get(
  "/users",
  verificationLib.verifyToken,
  verificationLib.verifyAdmin,
  function (req, res) {
    userDB.getUsers(function (err, results) {
      var role = req.body.role;

      if (err) {
        console.log(err);
        res.status(500);
        res.type("json");
        res.send(`{"Message":"Retrieval failed"}`);
      } else {
        res.status(200);
        res.type("json");
        res.send(results);
      }
    });
  }
);

//Retrieve all users record by it's ID
app.get(
  "/user/:userID",
  verificationLib.verifyToken,
  verificationLib.verifyAdmin,
  function (req, res) {
    var userID = req.params.userID;
    userDB.get1User(userID, function (err, results) {
      if (err) {
        console.log(err);
        res.status(500);
        res.type("json");
        res.send(`{"Message":"Retrieval failed"}`);
      } else {
        res.status(200);
        res.type("json");
        res.send(results);
      }
    });
  }
);

//Insert new users record(s)
app.post(
  "/user",
  validationFn.validateUser,
  verificationLib.verifyAdmin,
  function (req, res) {
    //retrieve the body params containing user details
    var name = req.body.name;
    var email = req.body.email;
    var role = req.body.role;
    var password = req.body.password;

    userDB.insertUser(name, email, role, password, function (err, results) {
      if (err) {
        console.log(err);
        res.status(500);
        res.type("json");
        res.send(`{"Message":"Insertion failed"}`);
      } else {
        console.log(results);
        res.status(200);
        res.type("json");
        res.send(`{"Message":"${results.affectedRows} row(s) inserted"}`);
      }
    });
  }
);

//Update new users record(s)
app.put("/user/:userID", function (req, res) {
  var userID = req.params.userID;
  var email = req.body.email;
  var password = req.body.password;

  userDB.updateUser(email, password, userID, function (err, results) {
    if (err) {
      console.log(err);
      res.status(500);
      res.type("json");
      res.send(`{"Message":"Update failed"}`);
    } else {
      console.log(results);
      res.status(200);
      res.type("json");
      res.send(`{"Message":"${results.affectedRows} row(s) updated"}`);
    }
  });
});

//Delete new users record(s)
app.delete("/user/:userID", function (req, res) {
  var userID = req.params.userID;
  userDB.deleteUser(userID, function (err, results) {
    if (err) {
      console.log(err);
      res.status(500);
      res.type("json");
      res.send(`{"Message":"Delete failed"}`);
    } else {
      res.status(200);
      res.type("json");
      res.send(`{"Message":"${results.affectedRows} row(s) deleted"}`);
    }
  });
});

/**Login Users */

//Login
app.post("/user/login", function (req, res) {
  var email = req.body.email;
  var password = req.body.password;
  userDB.loginUser(email, password, function (err, results) {
    if (err) {
      console.log(err);
      res.status(500);
      res.type("json");
      res.send(`{"Message":"Failed"}`);
    } else {
      res.status(200);
      res.type("json");
      res.send(`{"JWT":"${results}"}`);
    }
  });
});

module.exports = app;
