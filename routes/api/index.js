const router = require("express").Router();
const SalesRoutes = require("./Sales");

// Book routes
router.use("/sales", SalesRoutes);

module.exports = router;
