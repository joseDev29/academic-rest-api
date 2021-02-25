const controller = require("./period.controller");

module.exports = (app) => {
  app.get("/period", (req, res, next) => {
    controller.getAll(req, res, next);
  });

  app.get("/period/byid/:id", controller.getById);

  app.post("/period", (req, res, next) => {
    controller.createPeriod(req, res, next);
  });

  app.put("/period", (req, res, next) => {
    controller.updatePeriod(req, res, next);
  });

  app.delete("/period", (req, res, next) => {
    controller.deletePeriod(req, res, next);
  });
};
