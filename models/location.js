var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var LocationSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
});

LocationSchema.virtual("url").get(function () {
  return "/inventory/location" + this._id;
});

module.exports = mongoose.model("Location", LocationSchema);
