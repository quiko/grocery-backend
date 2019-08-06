const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const mealSchema = new Schema({
  name: String,
  description: String,
  groceries: [{ type: Schema.Types.ObjectId, ref: "grocery" }]
});

//create  model
const Meal = mongoose.model("meal", mealSchema);

//export model
module.exports = Meal;



