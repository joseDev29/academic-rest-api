/** packages */
const mongoose = require("mongoose");

/** Schema creation */
const facultySchema = new mongoose.Schema({
  code: {
    type: "String",
    required: true,
    unique: true,
  },
  name: {
    type: "String",
    required: true,
    unique: true,
  },
  dean: {
    type: "String",
    required: true,
  },
});

/** Schema exportation */
module.exports = facultySchema;
