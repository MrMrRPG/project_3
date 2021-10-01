sample = "static/top_women_chess_players_aug_2020.json"
var gdata
// Create Bar Chart
// function barChart(x){
d3.json(sample).then(function(data) {
    console.log(data);
    gdata = data
    g = gdata[0]
    // var attempt = g.filter(m => m.id == x)[0]
    var name_id = g.filter(m => m.Name == x)[0];
    console.log(name_id)
  });
// }