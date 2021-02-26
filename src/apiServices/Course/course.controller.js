/** Dto */
const courseDto = require("./course.dto");

exports.createCourse = (req, res, next) => {
  let course = {
    department_id: req.body.department_id,
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
      message: "course created",
      info: data,
    });
  });
};

exports.updateCourse = (req, res, next) => {
  const { id, department_id, code, name } = req.body;

  if (!id || !department_id || !code || !name) {
    return res.status(400).json({
      error: "all data is required",
    });
  }

  let course = {
    department_id,
    code,
    name,
  };

  courseDto.update({ _id: id }, course, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    if (!data) {
      return res.status(404).json({
        error: "course not found",
      });
    }

    res.status(201).json({
      message: "course updated",
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

    if (!data.length) {
      return res.status(404).json({
        error: "course not found",
      });
    }

    res.status(200).json({
      message: "course by code",
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

    if (!data) {
      return res.status(404).json({
        error: "course not found",
      });
    }

    res.status(200).json({
      message: "course deleted",
      info: data,
    });
  });
};
