const router = require("express-promise-router")();
const groceriesController = require("../controllers/groceries");

//router.get("/groceries/list", groceriesController.list);
router.post("/:mealId/groceries/create", groceriesController.create);

module.exports = router;