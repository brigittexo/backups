var validator = require("validator");

var validationFn = {
  validateUser: function (req, res, next) {
    var name = req.body.name;
    var email = req.body.email;
    var role = req.body.role;
    var password = req.body.password;

    if (
      validator.isAlphanumeric(name) &&
      validator.isEmail(email) &&
      (role == "admin" || role == "user") &&
      validator.isAlphanumeric(password) &&
      password.length > 7
    ) {
      next();
    } else {
      res.status(500);
      res.send(`{"Message": "Validation Failed!"}`);
    }
  },
};

module.exports = validationFn;
