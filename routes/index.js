const router = require("express").Router();
const login = require("./api-routes");

// Book routes
router.use("/api",login);

module.exports = router;
