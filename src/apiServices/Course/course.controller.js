/** Dto */
const courseDto = require("./course.dto");

exports.createCourse = (req, res, next) => {
  let course = {
    code: req.body.code,
    name: req.body.name,
  };
  courseDto.create(course, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.status(201).json({
      info: data,
    });
  });
};

exports.updateCourse = (req, res, next) => {
  let course = {
    code: req.body.code,
    name: req.body.name,
  };
  courseDto.update({ _id: req.body.id }, course, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.status(201).json({
      info: data,
    });
  });
};

exports.getAll = (req, res, next) => {
  courseDto.getAll({}, (err, data) => {
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

exports.getByCode = (req, res, next) => {
  courseDto.getByCode({ code: req.params.code }, (err, data) => {
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

exports.deleteCourse = (req, res, next) => {
  courseDto.delete({ _id: req.body.id }, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.status(200).json({
      message: "Course deleted",
      info: data,
    });
  });
};
