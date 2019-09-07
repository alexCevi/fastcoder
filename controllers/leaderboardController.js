// Import leaderboard model
Leaderboard = require("../models/leaderboardModel");

//Handle get requests api/leaderboards
exports.index = function(req, res) {
  Leaderboard.get(function(err, leaderboard) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.send(leaderboard);
  });
};
// Handle create leaderboard actions
exports.new = function(req, res) {
  var leaderboard = new Leaderboard();
  leaderboard.catagory = req.body.catagory;
  leaderboard.firstPlaceUser = req.body.firstPlaceUser;
  leaderboard.secondPlaceUser = req.body.secondPlaceUser;
  leaderboard.thirdPlaceUser = req.body.thirdPlaceUser;
  // save the leaderboard and check for errors
  leaderboard.save(function(err) {
    // Check for validation error
    if (err) res.json(err);
    else
      res.json({
        message: "New leaderboard created!",
        data: leaderboard
      });
  });
};
// Handle view leaderboard info
exports.view = function(req, res) {
  Leaderboard.findById(req.params.leaderboard_id, function(err, leaderboard) {
    if (err) res.send(err);
    res.json({
      message: "leaderboard details loading..",
      data: leaderboard
    });
  });
};
// Handle update leaderboard info
exports.update = function(req, res) {
  Leaderboard.findById(req.params.leaderboard_id, function(err, leaderboard) {
    if (err) res.send(err);
    leaderboard.catagory = req.body.catagory;
    leaderboard.firstPlaceUser = req.body.firstPlaceUser;
    leaderboard.secondPlaceUser = req.body.secondPlaceUser;
    leaderboard.thirdPlaceUser = req.body.thirdPlaceUser;
    // save the leaderboard and check for errors
    leaderboard.save(function(err) {
      if (err) res.json(err);
      res.json({
        message: "leaderboard Info updated",
        data: leaderboard
      });
    });
  });
};
// Handle delete leaderboard
exports.delete = function(req, res) {
  Leaderboard.remove(
    {
      _id: req.params.leaderboard_id
    },
    function(err, leaderboard) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "leaderboard deleted"
      });
    }
  );
};
