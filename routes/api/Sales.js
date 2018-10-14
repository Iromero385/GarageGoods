const router = require("express").Router();
const SalesController = require("./../../controllers/SalesController.js");

// Matches with "/api/sales"
router.route("/create")
  .get(SalesController.create)
router.route("/AllListings")
  .get(SalesController.findAll)


module.exports = router;
