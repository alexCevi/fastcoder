"use strict";
module.exports = function(app) {
  var fastCoder = require("../controllers/fastcoderController");

  app
    .route("/exercises")
    .get(fastCoder.list_all_exercises)
    .post(fastCoder.create_a_exercise);

  //   app
  //     .route("/leaderboards")
  //     .get(fastCoder.list_all_leaderboards)
  //     .post(fastCoder.create_a_leaderboard)
  //     .put(todoList.update_a_leaderboard);

  //   app
  //     .route("/leaders/:userId")
  //     .get(fastCoder.read_a_user)
  //     .put(fastCoder.update_a_user);
};
