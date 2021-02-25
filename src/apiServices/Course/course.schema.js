/** packages */
const mongoose = require("mongoose");

/** Schema creation */
const courseSchema = new mongoose.Schema({
  department_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "coll_department",
    required: true,
  },
  code: {
    type: "String",
    required: true,
    unique: true,
  },
  name: {
    type: "String",
    required: true,
  },
});

/** Schema exportation */
module.exports = courseSchema;
