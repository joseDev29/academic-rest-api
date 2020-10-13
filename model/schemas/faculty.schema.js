/** packages */
const mongoose = require("mongoose");


/** Schema creation */
const facultySchema = new mongoose.Schema({
    code: {
        type: "String",
        required: true
    },
    name: {
        type: "String",
        required: true
    },
    dean: {
        type: "String",
        required: true
    }
});

/** Schema exportation */
module.exports = facultySchema;