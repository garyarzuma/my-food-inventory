var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var FoodTypeSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
});

FoodTypeSchema.virtual("url").get(function () {
  return "/inventory/food-type" + this._id;
});

module.exports = mongoose.model("FoodType", FoodTypeSchema);
