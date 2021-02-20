const controller = require("./user.controller");

module.exports = (app) => {
  app.get("/user", (req, res, next) => {
    controller.getAll(req, res, next);
  });
};
