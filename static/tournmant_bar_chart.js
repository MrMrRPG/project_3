sample = "static/games.json"

d3.json(sample).then(function(data) {
    console.log(data);
  });
  