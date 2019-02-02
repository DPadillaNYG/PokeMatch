var express = require("express");
var app = express();
var path = require("path");

var PORT = process.env.PORT || 3000;

// Allows linkage between HTML & CSS
app.use(express.static(path.join(__dirname, "app/public")));

// Sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

app.listen(PORT, function() {
  console.log("Connected to server http://localhost:" + PORT);
});
