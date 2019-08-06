const Meal = require("../models/Meal");
const Grocery = require("../models/Grocery");

module.exports = {
  list: async (req, res) => {
    //list all meals
    const meal = await Meal.find();
    res.status(200).send({ meal });
  },
  //save meal to db
  create: async (req, res) => {
    const meal = await new Meal(req.body);
    const result = meal.save();
    console.log(result);
    return res.status(200).json({ message: "cool ! saved to the db ." });
  },
  getMealGroceries: async (req, res) => {
    const { mealId } = req.params;
    const meal = await Meal.findById(mealId);
    const data = await Grocery.populate(meal, { path: "groceries" });
    console.log("groceries", data);
    res.status(200).send(data.groceries);
  }
};

