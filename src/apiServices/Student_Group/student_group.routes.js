const {
  getAll,
  getByStudentId,
  getByGroupId,
  createStudentGroup,
  updateStudentGroup,
  deleteStudentGroup,
} = require("./student_group.controller");

module.exports = (app) => {
  app.get("/student_group", getAll);
  app.get("/student_group/bystudentid/:student_id", getByStudentId);
  app.get("/student_group/bygroupid/:group_id", getByGroupId);
  app.post("/student_group", createStudentGroup);
  app.put("/student_group", updateStudentGroup);
  app.delete("/student_group", deleteStudentGroup);
};
