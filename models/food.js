var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var FoodSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  expirationDate: { type: Date },
  expirationStatus: {
    type: String,
    required: true,
    enum: ["Spoiled", "Fresh"],
    default: "Fresh",
  },
  qty: { type: Number, required: true },
  location: { type: Schema.Types.ObjectId, ref: "Location", required: true },
  store: { type: Schema.Types.ObjectId, ref: "Store" },
  price: { type: Number },
  foodType: { type: Schema.Types.ObjectId, ref: "FoodType" },
});

FoodSchema.virtual("url").get(function () {
  return "/inventory/food" + this._id;
});

module.exports = mongoose.model("Food", FoodSchema);
