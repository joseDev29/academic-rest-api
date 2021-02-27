const Path = require("path");

const { login, createAdmin } = require("../apiServices/User/user.controller");

const { cookieVerifyToken } = require("../utils/jwt");

const authRoutes = (app) => {
  //Root
  app.get("/", (req, res, next) => {
    const token = req.cookies["access-token"];
    if (!token) {
      return res.redirect("/login");
    }

    const verification = cookieVerifyToken(token);

    if (!verification.decoded) {
      return res.redirect("/login");
    }

    res.sendFile(Path.resolve(__dirname, "../views/apiServices.html"));
  });

  //Render views
  app.get("/signUp/admin", (req, res, next) => {
    const token = req.cookies["access-token"];
    if (token) {
      const verification = cookieVerifyToken(token);

      if (verification.decoded) {
        return res.redirect("/");
      }
    }

    res.sendFile(Path.resolve(__dirname, "../views/signUpForm.html"));
  });

  app.get("/login", (req, res, next) => {
    const token = req.cookies["access-token"];
    if (token) {
      const verification = cookieVerifyToken(token);

      if (verification.decoded) {
        return res.redirect("/");
      }
    }

    res.sendFile(Path.resolve(__dirname, "../views/loginForm.html"));
  });

  //Auth
  app.post("/signUp/admin", createAdmin);

  app.post("/login", login);
};

module.exports = authRoutes;
