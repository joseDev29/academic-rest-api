/** packages */
const jwt = require("jsonwebtoken");
const {
  secretkeys: { jwt: jwtSecret },
} = require("../config");

module.exports = (req, res, next) => {
  let token = req.headers["access-token"];

  if (!token) {
    return res.status(401).json({
      error: "token required",
    });
  }

  let decoded;

  try {
    decoded = jwt.verify(token, jwtSecret);
  } catch (err) {
    return res.status(401).json({
      error: err,
    });
  }

  req.decodedToken = decoded;

  next();
};
