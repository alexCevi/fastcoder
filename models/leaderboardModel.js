var mongoose = require("mongoose");

var leaderboardSchema = mongoose.Schema({
  catagory: {
    type: String,
    required: true
  },
  firstPlaceUser: {
    type: Array,
    required: true
  },
  secondPlaceUser: {
    type: String,
    required: true
  },
  thirdPlaceUser: {
    type: String,
    required: true
  }
});

// Export exercise model
var leaderboard = (module.exports = mongoose.model(
  "leaderboard",
  leaderboardSchema
));
module.exports.get = function(callback, limit) {
  leaderboard.find(callback).limit(limit);
};
