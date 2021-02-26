const groupDto = require("./group.dto");

exports.createGroup = (req, res, next) => {
  const { course_id, period_id, teacher_id, number } = req.body;

  const group = {
    course_id,
    period_id,
    teacher_id,
    number,
  };

  groupDto.create(group, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    res.status(201).json({
      message: "group created",
      data,
    });
  });
};

exports.updateGroup = (req, res, next) => {
  const { id, course_id, period_id, teacher_id, number } = req.body;

  if (!id || !course_id || !period_id || !teacher_id || !number) {
    return res.status(400).json({
      error: "all data is required",
    });
  }

  const group = {
    course_id,
    period_id,
    teacher_id,
    number,
  };

  groupDto.update({ _id: id }, group, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    if (!data) {
      return res.status(404).json({
        message: "group no found",
      });
    }

    res.status(200).json({
      message: "group updated",
      data,
    });
  });
};

exports.deleteGroup = (req, res, next) => {
  const { id } = req.body;
  groupDto.delete({ _id: id }, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    if (!data) {
      return res.status(404).json({
        error: "group not found",
      });
    }

    res.status(200).json({
      message: "group deleted",
      info: data,
    });
  });
};

exports.getById = (req, res, next) => {
  const { id } = req.params;

  groupDto.getByCode({ _id: id }, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    if (!data.length) {
      return res.status(404).json({
        error: "group not found",
      });
    }

    res.status(200).json({
      message: "group by id",
      info: data[0],
    });
  });
};

exports.getAll = (req, res, next) => {
  groupDto.getAll({}, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    res.status(200).json({
      message: "all groups",
      info: data,
    });
  });
};
