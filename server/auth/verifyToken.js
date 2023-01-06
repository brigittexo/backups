var jwt = require("jsonwebtoken");
var config = require("../config/config");

var verificationLib = {
  verifyToken: function (req, res, next) {
    var token = req.headers["authorization"];

    if (!token || !token.includes("Bearer")) {
      res.status(403);
      res.type("json");
      res.send(`{"Message":"Not Authorized!"}`);
    } else {
      token = token.split("Bearer ")[1];

      jwt.verify(token, config.secretKey, function (err, decoded) {
        if (err) {
          res.status(403);
          res.type("json");
          res.send(`{"Message":"Not Authorized!"}`);
        } else {
          req.userID = decoded.userID;
          req.role = decoded.role;
          next();
        }
      });
    }
  },
  verifyAdmin: function (req, res, next) {
    var role = req.role;
    if (role != "admin") {
      res.status(403);
      res.type("json");
      res.send(`{"Message":"Not Authorized!"}`);
    } else {
      next();
    }
  },
};

module.exports = verificationLib;
