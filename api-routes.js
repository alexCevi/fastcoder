// Initialize express router
let router = require("express").Router();
// Set default API response
router.get("/", function(req, res) {
  res.json({
    status: "API Its Working",
    message: "Fastcoder API is working"
  });
});

var exerciseController = require("./controllers/exerciseController");
var leaderboardController = require("./controllers/leaderboardController");

router
  .route("/exercises")
  .get(exerciseController.index)
  .post(exerciseController.new);

router
  .route("/exercises/:exercise_id")
  .get(exerciseController.view)
  .put(exerciseController.update)
  .delete(exerciseController.delete);

router
  .route("/leaderboards")
  .get(leaderboardController.index)
  .put(leaderboardController.update)
  .post(leaderboardController.new);

router
  .route("/leaderboards/:leaderboard_id")
  .get(leaderboardController.view)
  .put(leaderboardController.update)
  .delete(leaderboardController.delete);

module.exports = router;
