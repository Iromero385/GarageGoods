const router = require("express").Router();
const SalesController = require("./../../controllers/SalesController.js");

// Matches with "/api/sales"
router.route("/")
  .get(SalesController.create)
module.exports = router;
