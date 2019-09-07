// Import express
let express = require("express");
// Import Body parser
let bodyParser = require("body-parser");
// Import Mongoose
let mongoose = require("mongoose");
// Initialize the app
var cors = require("cors");
let app = express();
app.use(cors());

// Import routes
let apiRoutes = require("./api-routes");
// Configure bodyparser to handle post requests
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
mongoose.connect(
  "mongodb://fast-coder-app-7948:qHwFEnvpQtbXbSEO3xjqD2xoHbBTY6@db-fast-coder-app-7948.nodechef.com:5376/fast-coder-app?ssl=true",
  {
    useNewUrlParser: true
  }
);

var db = mongoose.connection;

// Added check for DB connection

if (!db) console.log("Error connecting db");
else console.log("Db connected successfully");

// Setup server port
var port = process.env.PORT || 8080;

// Send message for default URL
app.get("/", (req, res) => res.send("API location"));

// Use Api routes in the App
app.use("/api", apiRoutes);
// Launch app to listen to specified port
app.listen(port, function() {
  console.log("Running fastcoderAPI on port " + port);
});
