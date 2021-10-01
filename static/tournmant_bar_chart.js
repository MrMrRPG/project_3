sample = "static/top_women_chess_players_aug_2020.json"

// Create Bar Chart
function barChart(x){
d3.json(sample).then(function(data) {
    console.log(data);
  });
}