const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String, // { type: String}, unique: false, required: true },
	lastName: String, // { type: String}, unique: false, required: true },
	username: String, //{ type: String}, unique: true, required: true },
	password: String //{ type: String}, unique: false, required: true }


});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;



