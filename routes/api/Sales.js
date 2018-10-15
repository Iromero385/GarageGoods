const router = require("express").Router();
const SalesController = require("./../../controllers/SalesController.js");

// Matches with "/api/sales"
router.route("/create")
  .post(SalesController.create)
router.route("/AllListings")
  .get(SalesController.findAll)
router.route("/AllListings/:id")
  .get(SalesController.findAllbyUser)

module.exports = router;
