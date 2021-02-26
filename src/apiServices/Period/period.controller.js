/** Dto */
const periodDto = require("./period.dto");

exports.createPeriod = (req, res, next) => {
  let period = {
    year: req.body.year,
    number: req.body.number,
    current: req.body.current,
  };
  periodDto.create(period, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.status(201).json({
      message: "period created",
      info: data,
    });
  });
};

exports.updatePeriod = (req, res, next) => {
  const { id, year, number, current } = req.body;

  if (!id || !year || !number || current === undefined || current === null) {
    return res.status(400).json({
      error: "all data is required",
    });
  }

  let period = {
    year,
    number,
    current,
  };

  periodDto.update({ _id: id }, period, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    if (!data) {
      return res.status(400).json({
        error: "period not found",
      });
    }

    res.status(201).json({
      message: "period updated",
      info: data,
    });
  });
};

exports.getById = (req, res, next) => {
  const { id } = req.params;

  periodDto.findOne({ _id: id }, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    if (!data) {
      return res.status(404).json({
        error: "period not found",
      });
    }

    res.status(200).json({
      message: "period by id",
      info: data,
    });
  });
};

exports.getAll = (req, res, next) => {
  periodDto.getAll({}, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.status(200).json({
      message: "get all periods",
      info: data,
    });
  });
};

exports.deletePeriod = (req, res, next) => {
  periodDto.delete({ _id: req.body.id }, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    if (!data) {
      return res.status(404).json({
        error: "period not found",
      });
    }

    res.status(200).json({
      message: "period deleted",
      info: data,
    });
  });
};
