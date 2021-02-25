const groupController = require("./group.controller");

module.exports = (app) => {
  app.get("/group", groupController.getAll);

  app.get("/group/byid/:id", groupController.getById);

  app.post("/group", groupController.createGroup);

  app.put("/group", groupController.updateGroup);

  app.delete("/group", groupController.deleteGroup);
};
