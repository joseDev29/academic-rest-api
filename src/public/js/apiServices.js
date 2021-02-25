//PERIOD

//CREATE_PERIOD
document.getElementById("createPeriodBtn").addEventListener("click", (e) => {
  e.preventDefault();

  const year = document.getElementById("createPeriodYear").value;
  const number = document.getElementById("createPeriodNumber").value;
  const current = document.getElementById("createPeriodCurrent").checked;

  const data = {
    year,
    number,
    current,
  };

  globalRequest(data, "/period", "POST", "responsePeriod");
});

//UPDATE_PERIOD
document.getElementById("updatePeriodBtn").addEventListener("click", (e) => {
  e.preventDefault();

  const id = document.getElementById("updatePeriodId").value;
  const year = document.getElementById("updatePeriodYear").value;
  const number = document.getElementById("updatePeriodNumber").value;
  const current = document.getElementById("updatePeriodCurrent").checked;

  const data = {
    id,
    year,
    number,
    current,
  };

  globalRequest(data, "/period", "PUT", "responsePeriod");
});

//DELETE_PERIOD
document.getElementById("deletePeriodBtn").addEventListener("click", (e) => {
  e.preventDefault();

  const data = {
    id: document.getElementById("deletePeriodId").value,
  };

  globalRequest(data, "/period", "DELETE", "responsePeriod");
});

//GET_BY_ID_PERIOD
document.getElementById("getByIdPeriodBtn").addEventListener("click", (e) => {
  e.preventDefault();
  const id = document.getElementById("getByIdPeriod").value;
  globalRequest({}, `/period/byid/${id}`, "GET", "responsePeriod");
});

//GET_ALL_PERIODS
document.getElementById("getAllPeriodBtn").addEventListener("click", (e) => {
  globalRequest({}, "/period", "GET", "responsePeriod");
});

//-----------------------------------------------------------------------------------

//FACULTY

//CREATE_FACULTY
document.getElementById("createFacultyBtn").addEventListener("click", (e) => {
  e.preventDefault();

  const code = document.getElementById("createFacultyCode").value;
  const name = document.getElementById("createFacultyName").value;
  const dean = document.getElementById("createFacultyDean").value;

  const data = {
    code,
    name,
    dean,
  };

  globalRequest(data, "/faculty", "POST", "responseFaculty");
});

//UPDATE_FACULTY
document.getElementById("updateFacultyBtn").addEventListener("click", (e) => {
  e.preventDefault();

  const id = document.getElementById("updateFacultyId").value;
  const code = document.getElementById("updateFacultyCode").value;
  const name = document.getElementById("updateFacultyName").value;
  const dean = document.getElementById("updateFacultyDean").value;

  const data = {
    id,
    code,
    name,
    dean,
  };

  globalRequest(data, "/faculty", "PUT", "responseFaculty");
});

//DELETE_FACULTY
document.getElementById("deleteFacultyBtn").addEventListener("click", (e) => {
  e.preventDefault();

  const data = {
    id: document.getElementById("deleteFacultyId").value,
  };

  globalRequest(data, "/faculty", "DELETE", "responseFaculty");
});

//GET_BY_CODE_FACULTY
document
  .getElementById("getByCodeFacultyBtn")
  .addEventListener("click", (e) => {
    e.preventDefault();
    const code = document.getElementById("getByCodeFaculty").value;
    globalRequest({}, `/faculty/bycode/${code}`, "GET", "responseFaculty");
  });

//GET_ALL_FACULTIES
document.getElementById("getAllFacultyBtn").addEventListener("click", (e) => {
  globalRequest({}, "/faculty", "GET", "responseFaculty");
});

//----------------------------------------------------------------------------------

//DEPARTMENT

//CREATE_DEPARTMENT
document
  .getElementById("createDepartmentBtn")
  .addEventListener("click", (e) => {
    e.preventDefault();

    const faculty_id = document.getElementById("createDepartmentFacultyId")
      .value;
    const code = document.getElementById("createDepartmentCode").value;
    const name = document.getElementById("createDepartmentName").value;
    const director = document.getElementById("createDepartmentDirector").value;

    const data = {
      faculty_id,
      code,
      name,
      director,
    };

    globalRequest(data, "/department", "POST", "responseDepartment");
  });

//UPDATE_DEPARTMENT
document
  .getElementById("updateDepartmentBtn")
  .addEventListener("click", (e) => {
    e.preventDefault();

    const id = document.getElementById("updateDepartmentId").value;
    const faculty_id = document.getElementById("updateDepartmentFacultyId")
      .value;
    const code = document.getElementById("updateDepartmentCode").value;
    const name = document.getElementById("updateDepartmentName").value;
    const director = document.getElementById("updateDepartmentDirector").value;

    const data = {
      id,
      faculty_id,
      code,
      name,
      director,
    };

    globalRequest(data, "/department", "PUT", "responseDepartment");
  });

//DELETE
document
  .getElementById("deleteDepartmentBtn")
  .addEventListener("click", (e) => {
    e.preventDefault();

    const data = {
      id: document.getElementById("deleteDepartmentId").value,
    };

    globalRequest(data, "/department", "DELETE", "responseDepartment");
  });

//GET_BY_CODE_DEPARTMENT
document
  .getElementById("getByCodeDepartmentBtn")
  .addEventListener("click", (e) => {
    e.preventDefault();
    const code = document.getElementById("getByCodeDepartment").value;
    globalRequest(
      {},
      `/department/bycode/${code}`,
      "GET",
      "responseDepartment"
    );
  });

//GET_ALL_DEPARTMENTS
document
  .getElementById("getAllDepartmentBtn")
  .addEventListener("click", (e) => {
    globalRequest({}, "/department", "GET", "responseDepartment");
  });

//---------------------------------------------------------------------------------

//COURSE

//CREATE_COURSE
document.getElementById("createCourseBtn").addEventListener("click", (e) => {
  e.preventDefault();

  const department_id = document.getElementById("createCourseDepartmentId")
    .value;
  const code = document.getElementById("createCourseCode").value;
  const name = document.getElementById("createCourseName").value;

  const data = {
    department_id,
    code,
    name,
  };

  globalRequest(data, "/course", "POST", "responseCourse");
});

//UPDATE_COURSE
document.getElementById("updateCourseBtn").addEventListener("click", (e) => {
  e.preventDefault();

  const id = document.getElementById("updateCourseId").value;
  const department_id = document.getElementById("updateCourseDepartmentId")
    .value;
  const code = document.getElementById("updateCourseCode").value;
  const name = document.getElementById("updateCourseName").value;

  const data = {
    id,
    department_id,
    code,
    name,
  };

  globalRequest(data, "/course", "PUT", "responseCourse");
});

//DELETE_COURSE
document.getElementById("deleteCourseBtn").addEventListener("click", (e) => {
  e.preventDefault();

  const data = {
    id: document.getElementById("deleteCourseId").value,
  };

  globalRequest(data, "/course", "DELETE", "responseCourse");
});

//GET_BY_CODE_COURSE
document.getElementById("getByCodeCourseBtn").addEventListener("click", (e) => {
  e.preventDefault();
  const code = document.getElementById("getByCodeCourse").value;
  globalRequest({}, `/course/bycode/${code}`, "GET", "responseCourse");
});

//GET_ALL_COURSES
document.getElementById("getAllCourseBtn").addEventListener("click", (e) => {
  globalRequest({}, "/course", "GET", "responseCourse");
});

//-----------------------------------------------------------------------------------------

//TEACHER

//CREATE_TEACHER
document.getElementById("createTeacherBtn").addEventListener("click", (e) => {
  e.preventDefault();

  const department_id = document.getElementById("createTeacherDepartmentId")
    .value;
  const teacherDocument = document.getElementById("createTeacherDocument")
    .value;
  const name = document.getElementById("createTeacherName").value;
  const lastname = document.getElementById("createTeacherLastname").value;
  const email = document.getElementById("createTeacherEmail").value;
  const phone = document.getElementById("createTeacherPhone").value;
  const office = document.getElementById("createTeacherOffice").value;
  const password = document.getElementById("createTeacherPassword").value;

  const data = {
    department_id,
    document: teacherDocument,
    name,
    lastname,
    email,
    phone,
    office,
    password,
  };

  globalRequest(data, "/teacher", "POST", "responseTeacher");
});

//UPDATE_TEACHER
document.getElementById("updateTeacherBtn").addEventListener("click", (e) => {
  e.preventDefault();

  const id = document.getElementById("updateTeacherId").value;
  const department_id = document.getElementById("updateTeacherDepartmentId")
    .value;
  const teacherDocument = document.getElementById("updateTeacherDocument")
    .value;
  const name = document.getElementById("updateTeacherName").value;
  const lastname = document.getElementById("updateTeacherLastname").value;
  const email = document.getElementById("updateTeacherEmail").value;
  const phone = document.getElementById("updateTeacherPhone").value;
  const office = document.getElementById("updateTeacherOffice").value;
  const olddocument = document.getElementById("updateTeacherOldDocument").value;
  const password = document.getElementById("updateTeacherPassword").value;

  const data = {
    id,
    department_id,
    document: teacherDocument,
    name,
    lastname,
    email,
    phone,
    office,
    olddocument,
    password,
  };

  globalRequest(data, "/teacher", "PUT", "responseTeacher");
});

//DELETE_TEACHER
document.getElementById("deleteTeacherBtn").addEventListener("click", (e) => {
  e.preventDefault();

  const data = {
    id: document.getElementById("deleteTeacherId").value,
  };

  globalRequest(data, "/teacher", "DELETE", "responseTeacher");
});

//GET_BY_DOCUMENT_TEACHER
document
  .getElementById("getByDocumentTeacherBtn")
  .addEventListener("click", (e) => {
    e.preventDefault();
    const teacherDocument = document.getElementById("getByDocumentTeacher")
      .value;
    globalRequest(
      {},
      `/teacher/bydocument/${teacherDocument}`,
      "GET",
      "responseTeacher"
    );
  });

//GET_ALL_TEACHERS
document.getElementById("getAllTeacherBtn").addEventListener("click", (e) => {
  globalRequest({}, "/teacher", "GET", "responseTeacher");
});

//-------------------------------------------------------------------------------

//STUDENT

//CREATE_STUDENT
document.getElementById("createStudentBtn").addEventListener("click", (e) => {
  e.preventDefault();

  const code = document.getElementById("createStudentCode").value;
  const name = document.getElementById("createStudentName").value;
  const lastname = document.getElementById("createStudentLastname").value;
  const email = document.getElementById("createStudentEmail").value;
  const phone = document.getElementById("createStudentPhone").value;
  const career = document.getElementById("createStudentCareer").value;
  const password = document.getElementById("createStudentPassword").value;

  const data = {
    code,
    name,
    lastname,
    email,
    phone,
    career,
    password,
  };

  globalRequest(data, "/student", "POST", "responseStudent");
});

//UPDATE_STUDENT
document.getElementById("updateStudentBtn").addEventListener("click", (e) => {
  e.preventDefault();

  const id = document.getElementById("updateStudentId").value;
  const code = document.getElementById("updateStudentCode").value;
  const name = document.getElementById("updateStudentName").value;
  const lastname = document.getElementById("updateStudentLastname").value;
  const email = document.getElementById("updateStudentEmail").value;
  const phone = document.getElementById("updateStudentPhone").value;
  const career = document.getElementById("updateStudentCareer").value;
  const oldcode = document.getElementById("updateStudentOldCode").value;
  const password = document.getElementById("updateStudentPassword").value;

  const data = {
    id,
    code,
    name,
    lastname,
    email,
    phone,
    career,
    oldcode,
    password,
  };

  globalRequest(data, "/student", "PUT", "responseStudent");
});

//DELETE_STUDENT
document.getElementById("deleteStudentBtn").addEventListener("click", (e) => {
  e.preventDefault();

  const data = {
    id: document.getElementById("deleteStudentId").value,
  };

  globalRequest(data, "/student", "DELETE", "responseStudent");
});

//GET_BY_CODE_STUDENT
document
  .getElementById("getByCodeStudentBtn")
  .addEventListener("click", (e) => {
    e.preventDefault();
    const code = document.getElementById("getByCodeStudent").value;
    globalRequest({}, `/student/bycode/${code}`, "GET", "responseStudent");
  });

//GET_ALL_STUDENTS
document.getElementById("getAllStudentBtn").addEventListener("click", (e) => {
  globalRequest({}, "/student", "GET", "responseStudent");
});

//------------------------------------------------------------------------------

//USER

//LOGIN
document.getElementById("userLoginBtn").addEventListener("click", (e) => {
  e.preventDefault();

  const username = document.getElementById("userLoginUsername").value;
  const password = document.getElementById("userLoginPassword").value;

  const data = {
    username,
    password,
  };

  globalRequest(data, "/login", "POST", "responseUser");
});

//GET_ALL_USERS
document.getElementById("getAllUserBtn").addEventListener("click", (e) => {
  globalRequest({}, "/user", "GET", "responseUser");
});

//----------------------------------------------------------------------------------

//GROUP

//CREATE_GROUP
document.getElementById("createGroupBtn").addEventListener("click", (e) => {
  e.preventDefault();

  const course_id = document.getElementById("createGroupCourseId").value;
  const period_id = document.getElementById("createGroupPeriodId").value;
  const teacher_id = document.getElementById("createGroupTeacherId").value;
  const number = document.getElementById("createGroupNumber").value;

  const data = {
    course_id,
    period_id,
    teacher_id,
    number,
  };

  globalRequest(data, "/group", "POST", "responseGroup");
});

//UPDATE_GROUP
document.getElementById("updateGroupBtn").addEventListener("click", (e) => {
  e.preventDefault();

  const id = document.getElementById("updateGroupId").value;
  const course_id = document.getElementById("updateGroupCourseId").value;
  const period_id = document.getElementById("updateGroupPeriodId").value;
  const teacher_id = document.getElementById("updateGroupTeacherId").value;
  const number = document.getElementById("updateGroupNumber").value;

  const data = {
    id,
    course_id,
    period_id,
    teacher_id,
    number,
  };

  globalRequest(data, "/group", "PUT", "responseGroup");
});

//DELETE_GROUP
document.getElementById("deleteGroupBtn").addEventListener("click", (e) => {
  e.preventDefault();

  const id = document.getElementById("deleteGroupId").value;

  globalRequest({ id }, "/group", "DELETE", "responseGroup");
});

//GET_BY_ID_GROUP
document.getElementById("getByIdGroupBtn").addEventListener("click", (e) => {
  e.preventDefault();

  const id = document.getElementById("getByIdGroup").value;

  globalRequest({}, `/group/byid/${id}`, "GET", "responseGroup");
});

//GET_ALL_GROUPS
document.getElementById("getAllGroupBtn").addEventListener("click", (e) => {
  globalRequest({}, "/group", "GET", "responseGroup");
});

//---------------------------------------------------------------------------------

//STUDENT_GROUP

//CREATE STUDENT_GROUP
document
  .getElementById("createStudent_GroupBtn")
  .addEventListener("click", (e) => {
    e.preventDefault();

    const group_id = document.getElementById("createStudent_GroupGroupId")
      .value;
    const student_id = document.getElementById("createStudent_GroupStudentId")
      .value;

    const data = {
      group_id,
      student_id,
    };

    globalRequest(data, "/student_group", "POST", "responseStudent_Group");
  });

//UPDATE_STUDENT_GROUP
document
  .getElementById("updateStudent_GroupBtn")
  .addEventListener("click", (e) => {
    e.preventDefault();

    const id = document.getElementById("updateStudent_GroupId").value;
    const group_id = document.getElementById("updateStudent_GroupGroupId")
      .value;
    const student_id = document.getElementById("updateStudent_GroupStudentId")
      .value;

    const data = {
      id,
      group_id,
      student_id,
    };

    globalRequest(data, "/student_group", "PUT", "responseStudent_Group");
  });

//DELETE_STUDENT_GROUP
document
  .getElementById("deleteStudent_GroupBtn")
  .addEventListener("click", (e) => {
    e.preventDefault();

    const group_id = document.getElementById("deleteStudent_GroupGroupId")
      .value;
    const student_id = document.getElementById("deleteStudent_GroupStudentId")
      .value;

    const data = {
      group_id,
      student_id,
    };

    globalRequest(data, "/student_group", "DELETE", "responseStudent_Group");
  });

//GET_BY_STUDENT_ID_STUDENT_GROUP
document
  .getElementById("getByStudentIdStudent_GroupBtn")
  .addEventListener("click", (e) => {
    e.preventDefault();

    const student_id = document.getElementById("getByStudentIdStudent_Group")
      .value;

    globalRequest(
      {},
      `/student_group/bystudentid/${student_id}`,
      "GET",
      "responseStudent_Group"
    );
  });

//GET_BY_GROUP_ID_STUDENT_GROUP
document
  .getElementById("getByGroupIdStudent_GroupBtn")
  .addEventListener("click", (e) => {
    e.preventDefault();

    const group_id = document.getElementById("getByGroupIdStudent_Group").value;

    globalRequest(
      {},
      `/student_group/bygroupid/${group_id}`,
      "GET",
      "responseStudent_Group"
    );
  });

//GET_ALL_STUDENT_GROUPS
document
  .getElementById("getAllStudent_GroupBtn")
  .addEventListener("click", (e) => {
    globalRequest({}, "/student_group", "GET", "responseStudent_Group");
  });
