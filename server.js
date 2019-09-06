var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require("mongoose"),
  Exercise = require("./fastcoderApi/api/models/fastcoderModel"), //created model loading here
  bodyParser = require("body-parser");

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1:29783/testtesttest");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./fastcoderApi/api/routes/fastcoderRoutes"); //importing route
routes(app); //register the route

app.listen(port);

console.log("API IS LIVE ON: " + port);
