const router = require("express").Router();
const gardenController = require("../../controllers/gardenController");

// Matches with "/api/gardens"
router.route("/")
  .get(gardenController.findAll)
  .post(gardenController.create);

// Matches with "/api/gardens/:id"
router
  .route("/:id")
  .get(gardenController.findById)
  .put(gardenController.update)
  .delete(gardenController.remove);

module.exports = router;
