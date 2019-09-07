let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
var cors = require("cors");
let app = express();
app.use(cors());

// Import routes
let apiRoutes = require("./api-routes");

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

mongoose.connect(
  "mongodb://fast-coder-app-7948:qHwFEnvpQtbXbSEO3xjqD2xoHbBTY6@db-fast-coder-app-7948.nodechef.com:5376/fast-coder-app?ssl=true",
  {
    useNewUrlParser: true
  }
);

var db = mongoose.connection;

if (!db) console.log("Error connecting db");
else console.log("db connected successfully");

var port = process.env.PORT || 8080;

// Send message for default URL
// TODO ADD SOMETHING FOR AUTH HERE WITH BEARER TOKENS
app.get("/", (req, res) => res.send("API location"));

app.use("/api", apiRoutes);

app.listen(port, function() {
  console.log("Running fastcoderAPI on port " + port);
});
