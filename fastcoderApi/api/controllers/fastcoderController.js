"use strict";

var mongoose = require("mongoose"),
  Exercise = mongoose.model("Exercises");
// Leaderboard = mongoose.model("Leaderboard");
// User = mongoose.model("Users");

//Routes for Exercises

exports.list_all_exercises = function(req, res) {
  Exercise.find({}, function(err, exercise) {
    if (err) res.send(err);
    res.json(exercise);
  });
};

exports.create_a_exercise = function(req, res) {
  var new_exercise = new Exercise(req.body);
  new_exercise.save(function(err, exercise) {
    if (err) res.send(err);
    res.json(exercise);
  });
};

// //Routes for leaderboards

// exports.ist_all_leaderboards = function(req, res) {
//   Leaderboard.find({}, function(err, leaderboard) {
//     if (err) res.send(err);
//     res.json(leaderboard);
//   });
// };

// exports.create_a_leaderboard = function(req, res) {
//   var new_leaderboard = new Exercise(req.body);
//   new_leaderboard.save(function(err, leaderboard) {
//     if (err) res.send(err);
//     res.json(leaderboard);
//   });
// };

// exports.update_a_leaderboard = function(req, res) {
//   Leaderboard.findOneAndUpdate(
//     { _id: req.params.leaderboard },
//     req.body,
//     { new: true },
//     function(err, leaderboard) {
//       if (err) res.send(err);
//       res.json(leaderboard);
//     }
//   );
// };

// // Routes for leaders

// exports.read_a_user = function(req, res) {
//   User.findById(req.params.userId, function(err, task) {
//     if (err) res.send(err);
//     res.json(Users);
//   });
// };

// exports.update_a_user = function(req, res) {
//   User.findOneAndUpdate(
//     { _id: req.params.user },
//     req.body,
//     { new: true },
//     function(err, user) {
//       if (err) res.send(err);
//       res.json(user);
//     }
//   );
// };
