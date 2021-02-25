const userRoutes = require("../apiServices/User/user.routes");

const studentRoutes = require("../apiServices/Student/student.routes");

const teacherRoutes = require("../apiServices/Teacher/teacher.routes");

const periodRoutes = require("../apiServices/Period/period.routes");

const courseRoutes = require("../apiServices/Course/course.routes");

const facultyRoutes = require("../apiServices/Faculty/faculty.routes");

const departmentRoutes = require("../apiServices/Department/department.routes");

const groupRoutes = require("../apiServices/Group/group.routes");

const student_groupRoutes = require("../apiServices/Student_Group/student_group.routes");

const indexRouter = (app) => {
  app.use(require("../middleware/verifyToken"));

  userRoutes(app);
  studentRoutes(app);
  teacherRoutes(app);
  periodRoutes(app);
  courseRoutes(app);
  facultyRoutes(app);
  departmentRoutes(app);
  groupRoutes(app);
  student_groupRoutes(app);
};

module.exports = indexRouter;
