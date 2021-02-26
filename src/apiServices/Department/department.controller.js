/** Dto */
const departmentDto = require("./department.dto");

exports.createDepartment = (req, res, next) => {
  let department = {
    faculty_id: req.body.faculty_id,
    code: req.body.code,
    name: req.body.name,
    director: req.body.director,
  };
  departmentDto.create(department, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.status(201).json({
      message: "department created",
      info: data,
    });
  });
};

exports.updateDepartment = (req, res, next) => {
  const { id, faculty_id, code, name, director } = req.body;

  if (!id || !faculty_id || !code || !name || !director) {
    return res.status(400).json({
      error: "all data is required",
    });
  }

  let department = {
    faculty_id,
    code,
    name,
    director,
  };

  departmentDto.update({ _id: id }, department, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    if (!data) {
      return res.status(404).json({
        error: "department not found",
      });
    }

    res.status(201).json({
      message: "department updated",
      info: data,
    });
  });
};

exports.getAll = (req, res, next) => {
  departmentDto.getAll({}, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.status(200).json({
      message: "get all departments",
      info: data,
    });
  });
};

exports.getByCode = (req, res, next) => {
  departmentDto.getByCode({ code: req.params.code }, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    if (!data.length) {
      return res.status(404).json({
        error: "dapartment not found",
      });
    }

    res.status(200).json({
      message: "department by code",
      info: data,
    });
  });
};

exports.deleteDepartment = (req, res, next) => {
  departmentDto.delete({ _id: req.body.id }, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    if (!data) {
      return res.status(404).json({
        error: "dapartment not found",
      });
    }

    res.status(200).json({
      message: "department deleted",
      info: data,
    });
  });
};
