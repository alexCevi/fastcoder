"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ExercisesSchema = new Schema({
  exercise: {
    id: String,
    title: String,
    tag: String,
    questionData: []
  }
});
// var LeaderBoardSchema = new Schema({
//   leaderboard: {
//     id: String,
//     first: String,
//     second: String,
//     third: String
//   }
// });
// var UsersSchema = new Schema({
//   users: {
//     id: String,
//     testData: String
//   }
// });

module.exports = mongoose.model("Exercises", ExercisesSchema);
// module.exports = mongoose.model("Leaderboard", LeaderBoardSchema);
// module.exports = mongoose.model("Users", UsersSchema);
