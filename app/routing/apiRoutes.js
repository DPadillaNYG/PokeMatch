var pokemon = require("../data/pokemon");
var trainerArray = require("../data/trainers");

var apiRoutes = function(app) {
  app.get("/api/trainers", function(req, res) {
    res.json(trainerArray);
  });

  app.post("/api/trainers", function(req, res) {
    trainerArray.push(req.body);
    res.end();
  });

  app.get("/api/pokemon", function(req, res) {
    res.json(pokemon);
  });
};

module.exports = apiRoutes;
