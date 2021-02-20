const jwt = require("jsonwebtoken");
const { secretkeys } = require("../config");

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
      expiresIn: "10m",
    }
  );
  return token;
};

module.exports = {
  GenerateToken,
};
