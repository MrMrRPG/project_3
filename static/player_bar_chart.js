sample = "static/fide_historical.json"
// var gdata
let name_list = []
let id_list = []
let standard_rating_list = []
// Create Bar Chart
// function barChart(x){
d3.json(sample).then(function(data) {
    console.log(data);
    // gdata = data

    for (i =0; i < data.length; i++){
        name_list.push(data[i].rating)
        id_list.push(data[i].name)
        standard_rating_list.push(data[i].rank)
        // var names_id = data[i].Fideid   
    }
    console.log(name_list)
    console.log(standard_rating_list)
    // g = gdata[0]["Fideid"]
    // console.log(g)
        // Slice the first 10 objects for plotting
        slicedName = name_list.slice(0,10);
        slicedRating = standard_rating_list.slice(0, 10);
        slicedID = id_list.slice(0,10);
        slicedID = slicedID.map(L => "Player Name: " + L)


    // // Trace1 for the OTU Data
    let trace1 = {
        x: slicedID,
        y: slicedRating,
        text: slicedName,
        name: "Player Rank Chart",
        type: "scatter"
        // orientation: "h"
        };
  
  let traceData = [trace1];
  
  // Note that we use `traceData` here, not `data`
  Plotly.newPlot("bar", traceData);


    
  });
// }