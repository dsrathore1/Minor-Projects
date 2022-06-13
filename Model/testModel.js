const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const joi = require("joi")
const pwdcomplexity = require("joi-password-complexity");


const testSchema = new mongoose.Schema({
    name: { type: String, trim: true },
    username: { type: String, trim: true },
    email: { type: String },
    num: { type: Number }
});

testSchema.method.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_PRIVATE_KEY, { expiresIn: "7w" });
    return token;
};

const testModel = new mongoose.model("testModel", testSchema);



module.exports = testModel;