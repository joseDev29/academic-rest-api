const jwt = require("jsonwebtoken");
const { secretkeys, sessionTimeInSeconds } = require("../config");

const GenerateToken = (user) => {
  let secretKey = secretkeys.jwt;
  let token = jwt.sign(
    {
      data: {
        username: user.username,
        id: user._id,
        role: user.role,
      },
    },
    secretKey,
    {
      expiresIn: sessionTimeInSeconds,
    }
  );
  return token;
};

const cookieVerifyToken = (token) => {
  let result = {
    error: null,
  };

  try {
    result.decoded = jwt.verify(token, jwtSecret);
  } catch (err) {
    result.error = err;
  }

  return result;
};

module.exports = {
  GenerateToken,
  cookieVerifyToken,
};
