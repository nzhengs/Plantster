const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gardenSchema = new Schema({
  name: String,
  length: Number,
  breadth: Number,
  layout: [],
  finalPlants: []
});

const Garden = mongoose.model("Garden", gardenSchema);

module.exports = Garden;
