// Import exercise model
Exercise = require("../models/exerciseModel");

//Handle get requests api/exercises
exports.index = function(req, res) {
  Exercise.get(function(err, exercise) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.send(exercise);
  });
};
// Handle create exercise actions
exports.new = function(req, res) {
  var exercise = new Exercise();
  exercise.id = req.body.id;
  exercise.title = req.body.title;
  exercise.tag = req.body.tag;
  exercise.questionData = req.body.questionData;
  // save the exercise and check for errors
  exercise.save(function(err) {
    // Check for validation error
    if (err) res.json(err);
    else
      res.json({
        message: "New exercise created!",
        data: exercise
      });
  });
};
// Handle view exercise info
exports.view = function(req, res) {
  Exercise.findById(req.params.exercise_id, function(err, exercise) {
    if (err) res.send(err);
    res.json({
      message: "exercise details loading..",
      data: exercise
    });
  });
};
// Handle update exercise info
exports.update = function(req, res) {
  Exercise.findById(req.params.exercise_id, function(err, exercise) {
    if (err) res.send(err);
    exercise.id = req.body.id;
    exercise.title = req.body.title;
    exercise.tag = req.body.tag;
    exercise.questionData = req.body.questionData;
    // save the exercise and check for errors
    exercise.save(function(err) {
      if (err) res.json(err);
      res.json({
        message: "exercise Info updated",
        data: exercise
      });
    });
  });
};
// Handle delete exercise
exports.delete = function(req, res) {
  Exercise.remove(
    {
      _id: req.params.exercise_id
    },
    function(err, exercise) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "exercise deleted"
      });
    }
  );
};
