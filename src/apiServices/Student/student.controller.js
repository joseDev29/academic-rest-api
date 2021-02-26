/** Dto */
const studentDto = require("./student.dto");
const userDto = require("../User/user.dto");
const config = require("../../config");

/** Helper */
const { EncryptPassword } = require("../../utils/cryptojs");
const { sendSMS } = require("../../services/sms_notification");

exports.createStudent = (req, res, next) => {
  if (!req.body.password) {
    return res.status(400).json({
      error: "password is required",
    });
  }

  let std = {
    code: req.body.code,
    name: req.body.name,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
    career: req.body.career,
  };
  studentDto.create(std, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    const role = config.roles.student;
    let user = {
      name: std.name,
      lastname: std.lastname,
      username: std.code,
      password: EncryptPassword(req.body.password),
      role,
    };

    userDto.create(user, (errUser, dataUser) => {
      if (errUser) {
        return studentDto.delete({ _id: data._id }, (e, data) => {
          return res.status(400).json({
            error: errUser,
          });
        });
      }

      sendSMS(std.phone);

      res.status(201).json({
        message: "student created",
        info: data,
      });
    });
  });
};

exports.updateStudent = (req, res, next) => {
  const {
    id,
    code,
    name,
    lastname,
    email,
    phone,
    career,
    oldcode,
    password,
  } = req.body;

  if (!oldcode) {
    return res.status(400).json({
      error: "oldcode is required",
    });
  }

  if (
    !id ||
    !code ||
    !name ||
    !lastname ||
    !email ||
    !phone ||
    !career ||
    !password
  ) {
    return res.status(400).json({
      error: "all data is required",
    });
  }

  let std = {
    code,
    name,
    lastname,
    email,
    phone,
    career,
  };

  studentDto.update({ _id: id }, std, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    if (!data) {
      return res.status(404).json({
        error: "student not found",
      });
    }

    const role = config.roles.student;
    let user = {
      name: std.name,
      lastname: std.lastname,
      username: std.code,
      password: EncryptPassword(password),
      role,
    };

    userDto.update({ username: oldcode }, user, (errUser, dataUser) => {
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

      sendSMS(std.phone);
      return res.status(201).json({
        message: "student updated",
        info: data,
      });
    });
  });
};

exports.getAll = (req, res, next) => {
  studentDto.getAll({}, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.status(200).json({
      message: "all students",
      info: data,
    });
  });
};

exports.getByCode = (req, res, next) => {
  studentDto.getByCode({ code: req.params.code }, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    if (!data.length) {
      return res.status(404).json({
        error: "student not found",
      });
    }
    res.status(200).json({
      message: "student by code",
      info: data,
    });
  });
};

exports.deleteStudent = (req, res, next) => {
  studentDto.delete({ _id: req.body.id }, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    if (!data) {
      return res.status(404).json({
        error: "student not found",
      });
    }

    userDto.delete({ username: data.code }, (errUser, dataUser) => {
      if (errUser) {
        return res.status(400).json({
          error: errUser,
        });
      }

      res.status(200).json({
        message: "student deleted",
        data,
      });
    });
  });
};
