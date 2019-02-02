var path = require("path");

var htmlRoutes = function(app) {
  // Viewable at http://localhost:3000/
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/../../app/public/home.html"));
  });

  // Viewable at http://localhost:3000/survey
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname + "/../../app/public/survey.html"));
  });
};

module.exports = htmlRoutes;
