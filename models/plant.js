const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  Type: String,
Name: String,
Image: String,
BotanicalName: String,
Height: String,
Spacing: String,
PS: Number,
RS: Number,
Depth: String,
Spread: String,
Light: String,
Yield: String,
Foliage: String,
Fruit: String,
Maturity: String,
Zone: String,
Germination: String,
Form: String,
Flowers: String,
Soil: String,
Growth: String,
Seeds: String,
Pruning: String,
Comments: String,

});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;



