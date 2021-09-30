// Create a custom function to return Roman gods with more than 1 million search results
function young(player) {
    return player.Year_of_birth > 1990;
  }
  
  // Call the custom function with filter()
  let youngplayers = data.filter(young);
  
  // Trace for the Roman Data
  let trace1 = {
      x: youngplayers.map(row => row.Name),
      y: youngplayers.map(row => row.Year_of_birth),
      type: "bar"
  };
  
  // Data trace array
  let traceData = [trace1];
  
  // Apply title to the layout
  let layout = {
    title: "Young Chess Players Graph"
  };
  
  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("plot", traceData, layout);
  