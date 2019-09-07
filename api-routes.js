// Initialize express router
let router = require("express").Router();
// Set default API response
router.get("/", function(req, res) {
  res.json({
    status: "API Its Working",
    message: "Fastcoder API is working"
  });
});
// Import controller
var mainController = require("./mainController");

router
  .route("/exercises")
  .get(mainController.index)
  .post(mainController.new);

router
  .route("/exercises/:exercise_id")
  .get(mainController.view)
  .put(mainController.update)
  .delete(mainController.delete);

// Export API routes
module.exports = router;
