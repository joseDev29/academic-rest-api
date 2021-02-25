/** Dto */
const facultyDto = require("./faculty.dto");

exports.createFaculty = (req, res, next) => {
  let faculty = {
    code: req.body.code,
    name: req.body.name,
    dean: req.body.dean,
  };
  facultyDto.create(faculty, (err, data) => {
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

exports.updateFaculty = (req, res, next) => {
  let faculty = {
    code: req.body.code,
    name: req.body.name,
    dean: req.body.dean,
  };
  facultyDto.update({ _id: req.body.id }, faculty, (err, data) => {
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
  facultyDto.getAll({}, (err, data) => {
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
  facultyDto.getByCode({ code: req.params.code }, (err, data) => {
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

exports.deleteFaculty = (req, res, next) => {
  facultyDto.delete({ _id: req.body.id }, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.status(200).json({
      message: "faculty deleted",
      info: data,
    });
  });
};
