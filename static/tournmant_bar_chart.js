sample = "static/top_women_chess_players_aug_2020.json"
var gdata
let name_list = []
let standard_rating_list = []
// Create Bar Chart
// function barChart(x){
d3.json(sample).then(function(data) {
    console.log(data);
    gdata = data

    for (i =0; i < data.length; i++){
        name_list.push(data[i].Fideid)
        standard_rating_list.push(data[i].Standard_Rating)
        // var names_id = data[i].Fideid   
    }
    console.log(name_list)
    console.log(standard_rating_list)
    // g = gdata[0]["Fideid"]
    // console.log(g)
        // Slice the first 10 objects for plotting
        slicedRating = standard_rating_list.slice(0, 15);
        slicedNames = name_list.slice(0,15);
        slicedNames = slicedNames.map(L => "ID " + L)


    // // Trace1 for the OTU Data
    let trace1 = {
        x: slicedNames,
        y: slicedRating,
        text: slicedNames,
        name: "Tournament Bar Chart",
        type: "bar"
        // orientation: "h"
        };
  
  let traceData = [trace1];
  
  // Note that we use `traceData` here, not `data`
  Plotly.newPlot("bar", traceData);


    
  });
// }