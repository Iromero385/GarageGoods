const router = require("express").Router();
const SalesRoutes = require("./Sales");

// Book routes
router.use("/GarageGoods", SalesRoutes);

module.exports = router;
