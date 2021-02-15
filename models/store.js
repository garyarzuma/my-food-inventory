var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var StoreSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
});

StoreSchema.virtual("url").get(function () {
  return "/inventory/store" + this._id;
});

module.exports = mongoose.model("Store", StoreSchema);
