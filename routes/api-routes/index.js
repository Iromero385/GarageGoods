const router = require("express").Router();
const loginRoutes = require("./login");
const sales = require("./sales")

router.use("/data", loginRoutes)

module.export router
