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
      message: "faculty created",
      info: data,
    });
  });
};

exports.updateFaculty = (req, res, next) => {
  const { id, code, name, dean } = req.body;

  if (!id || !code || !name || !dean) {
    return res.status(400).json({
      error: "all data is required",
    });
  }

  let faculty = {
    code,
    name,
    dean,
  };
  facultyDto.update({ _id: id }, faculty, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    if (!data) {
      return res.status(404).json({
        error: "faculty not found",
      });
    }

    res.status(201).json({
      message: "faculty updated",
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
      message: "get all faculties",
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

    if (!data.length) {
      return res.status(404).json({
        error: "faculty not found",
      });
    }

    res.status(200).json({
      message: "faculty by code",
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

    if (!data) {
      return res.status(404).json({
        error: "faculty not found",
      });
    }

    res.status(200).json({
      message: "faculty deleted",
      info: data,
    });
  });
};
