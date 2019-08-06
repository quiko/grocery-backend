const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create schema
const grocerySchema = new Schema({
  name: String,
  price: String,
  buyer: String,
  Complete: Boolean,
  
});

//create Model
const Grocery = mongoose.model("grocery",grocerySchema);

//export Model
module.exports = Grocery;
