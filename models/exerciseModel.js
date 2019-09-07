var mongoose = require("mongoose");

var exerciseSchema = mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    required: true
  },
  questionData: {
    type: Array,
    required: true
  }
});

// Export exercise model
var exercise = (module.exports = mongoose.model("exercise", exerciseSchema));
module.exports.get = function(callback, limit) {
  exercise.find(callback).limit(limit);
};
