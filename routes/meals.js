const router = require("express-promise-router")();
const mealsController = require("../controllers/meals");
//list all meals
router.get("/meals/list", mealsController.list);
//add meal
router.post("/meals/create", mealsController.create);
//router
//.route("/mealId/edit")
//.get(mealsController.show)
//.post(mealsController.edit);
//router.get("/mealId/delete", mealsController.delete);
//get meal groceries 
router.get("/:mealId/groceries", mealsController.getMealGroceries);

module.exports = router;