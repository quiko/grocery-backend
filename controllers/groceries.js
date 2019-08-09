const Grocery = require("../models/Grocery");
const Meal = require("../models/Meal");

module.exports = {
  list: async (req, res) => {
    //list all groceries
    const groceries = await Grocery.find();
    res.status(200).send({ groceries });
  },
  //Create a new grocery item
  create: async (req, res) => {
    const { mealId } = req.params;
    //create a new item
    const newItem = await new Grocery(req.body);
    newItem.save();

    // get meal
    const meal = await Meal.findById(mealId);

    // add item to the meal groceries array
    await meal.groceries.push(newItem);

    //save meal
    meal.save();
    res.status(201).json(newItem);
  }
};
