var pokemonArray = require("../data/pokemon");
var trainerArray = require("../data/trainers");

var apiRoutes = function(app) {
  app.get("/api/trainers", function(req, res) {
    res.json(trainerArray);
  });

  app.post("/api/trainers", function(req, res) {
    trainerArray.push(req.body);
    var current = req.body.answers;
    var name;
    var photo;
    var description;

    var totalDiff;
    var smallestNum;

    pokemonArray.forEach(pokemon => {
      totalDiff = 0;
      for (var i = 0; i < pokemon.scores.length; i++) {
        totalDiff += Math.abs(pokemon.scores[i] - current[i]);

        if (totalDiff < smallestNum || smallestNum === undefined) {
          smallestNum = totalDiff;
          name = pokemon.name;
          photo = pokemon.photo;
          description = pokemon.description;
        }
      }
    });

    var pokeMatch = {
      name: name,
      photo: photo,
      description: description
    };

    res.send(pokeMatch);
  });

  app.get("/api/pokemon", function(req, res) {
    res.json(pokemonArray);
  });
};

module.exports = apiRoutes;
