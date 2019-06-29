const router = require("express").Router();
const plantRoutes = require("./plants");
const user = require("./user");
// plants routes
router.use("/plants", plantRoutes);
router.use("/user", user);
module.exports = router;
