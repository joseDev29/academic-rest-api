const student_groupDto = require("./student_group.dto");

exports.createStudentGroup = (req, res, next) => {
  const { student_id, group_id } = req.body;

  const student_group = {
    student_id,
    group_id,
  };

  student_groupDto.create(student_group, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    res.status(201).json({
      message: "student_group created",
      info: data,
    });
  });
};

exports.updateStudentGroup = (req, res, next) => {
  const { id, student_id, group_id } = req.body;

  if (!id || !student_id || !group_id) {
    return res.status(400).json({
      error: "all data is required",
    });
  }

  const student_group = {
    student_id,
    group_id,
  };

  student_groupDto.update({ _id: id }, student_group, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    if (!data) {
      return res.status(404).json({
        error: "student_group no founf",
      });
    }

    res.status(200).json({
      message: "student_group updated",
      info: data,
    });
  });
};

exports.getByStudentId = (req, res, next) => {
  const { student_id } = req.params;

  if (!student_id) {
    return res.status(400).json({
      error: "student_id is requires",
    });
  }

  student_groupDto.find({ student_id }, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    res.status(200).json({
      message: "student_group list by student_id",
      info: data,
    });
  });
};

exports.getByGroupId = (req, res, next) => {
  const { group_id } = req.params;

  if (!group_id) {
    return res.status(400).json({
      error: "group_id is required",
    });
  }

  student_groupDto.find({ group_id }, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    res.status(200).json({
      message: "student_group list by group_id",
      info: data,
    });
  });
};

exports.getAll = (req, res, next) => {
  student_groupDto.find({}, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    res.status(200).json({
      message: "get all student_group",
      info: data,
    });
  });
};

exports.deleteStudentGroup = (req, res, next) => {
  const { student_id, course_id } = req.body;

  student_groupDto.deleteOne(
    { $and: [{ student_id, course_id }] },
    (err, data) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }

      if (!data) {
        return res.status(404).json({
          error: "student_group not found",
        });
      }

      res.status(202).json({
        message: "student_group deleted",
        info: data,
      });
    }
  );
};
