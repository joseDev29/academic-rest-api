/** Dto */
const teacherDto = require("./teacher.dto");
const userDto = require("../User/user.dto");
const config = require("../../config");

/** Helper */
const { EncryptPassword } = require("../../utils/cryptojs");
const { sendSMS } = require("../../services/sms_notification");

exports.createTeacher = (req, res, next) => {
  if (!req.body.password) {
    return res.status(400).json({
      error: "password is required",
    });
  }

  let teacher = {
    document: req.body.document,
    name: req.body.name,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
    office: req.body.office,
    department_id: req.body.department_id,
  };
  teacherDto.create(teacher, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    const role = config.roles.teacher;

    let user = {
      name: teacher.name,
      lastname: teacher.lastname,
      username: teacher.document,
      password: EncryptPassword(req.body.password),
      role,
    };

    userDto.create(user, (errUser, dataUser) => {
      if (errUser) {
        return teacherDto.delete({ _id: data._id }, () => {
          console.log(`Deleting due to not user creation`);
          res.status(400).json({
            error: errUser,
          });
        });
      }
      sendSMS(teacher.phone);

      res.status(201).json({
        info: data,
      });
    });
  });
};

exports.updateTeacher = (req, res, next) => {
  if (!req.body.olddocument) {
    return res.status(400).json({
      error: "olddoument is requires for update",
    });
  }

  let teacher = {
    document: req.body.document,
    name: req.body.name,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
    office: req.body.office,
    department_id: req.body.department_id,
  };

  teacherDto.update({ _id: req.body.id }, teacher, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    if (!data) {
      return res.status(404).json({
        error: "teacher not found",
      });
    }

    const role = config.roles.teacher;
    let user = {
      name: teacher.name,
      lastname: teacher.lastname,
      username: teacher.document,
      role,
    };

    if (req.body.password) {
      user = {
        ...user,
        password: EncryptPassword(req.body.password),
      };
      console.log("user pasword: ", user);
    }

    userDto.update(
      { username: req.body.olddocument },
      user,
      (errUser, dataUser) => {
        if (errUser) {
          return res.status(400).json({
            error: errUser,
          });
        }

        if (!dataUser) {
          return res.status(404).json({
            error: "user not found",
          });
        }

        sendSMS(teacher.phone);
        return res.status(201).json({
          info: data,
        });
      }
    );
  });
};

exports.getAll = (req, res, next) => {
  teacherDto.getAll({}, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.status(200).json({
      info: data,
    });
  });
};

exports.getByDocument = (req, res, next) => {
  teacherDto.getByDocument({ document: req.params.document }, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    if (!data.length) {
      return res.status(404).json({
        error: "teacher not found",
      });
    }

    res.status(200).json({
      info: data,
    });
  });
};

exports.deleteTeacher = (req, res, next) => {
  teacherDto.delete({ _id: req.body.id }, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    if (!data) {
      return res.status(404).json({
        error: "teacher not found",
      });
    }

    userDto.delete({ username: data.document }, (errUser, dataUser) => {
      if (errUser) {
        return res.status(400).json({
          error: errUser,
        });
      }

      res.status(200).json({
        message: "Teacher deleted",
        info: data,
      });
    });
  });
};
