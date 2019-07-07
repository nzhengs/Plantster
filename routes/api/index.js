const router = require("express").Router();
const plantRoutes = require("./plants");
const user = require("./user");
const gardenRoutes = require("./gardens");
// plants routes
router.use("/plants", plantRoutes);
router.use("/gardens", gardenRoutes);

router.use("/user", user);
module.exports = router;
