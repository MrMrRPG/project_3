sample = "static/games.json"
// unique openings // count? 

//     var li2 = drop.append("option").text(`${s1[i].id}`);
//     li2.property("value", s1[i].id)
//   }

// function chart()
d3.json(sample).then(function(data) {
    gdata = data
    //for loop 
    var openings = data.map(d => d.opening_name)
    var outcomes = data.map(d => d.winner)
    var turns = data.map(d => d.turns)
    var types = data.map(d => d.victory_status)

    
    var unArr_openings = Array.from(new Set(data.map(d => d.opening_name)))
    opening_count = []

    unArr_openings.forEach(d => { 
        x = openings.filter(f => f == d)
        opening_count.push(x.length)
    })

    let trace1 = {
        x: opening_count,
        y: unArr_openings
      };
      
      let data1 = [trace1];
      
      let layout = {
        title: "Opening Count"
      };
      
      Plotly.newPlot("plot", data1, layout);

    //   const data2 = {
    //     labels: [
    //       'Red',
    //       'Green',
    //       'Yellow',
    //       'Grey',
    //       'Blue'
    //     ],
    //     datasets: [{
    //       label: 'My First Dataset',
    //       data: [11, 16, 7, 3, 14],
    //       backgroundColor: [
    //         'rgb(255, 99, 132)',
    //         'rgb(75, 192, 192)',
    //         'rgb(255, 205, 86)',
    //         'rgb(201, 203, 207)',
    //         'rgb(54, 162, 235)'
    //       ]
    //     }]
    //   };
  });

  
// function chart1()

// research types of charts that makes sense based on data that you have 
// - radar chart, polar area chart, circle charts, how many of each variable you need to make it happen, trial and error
// start simple (bar chart, color corresponds to something else)

// function chart2()

// function init()
// queen's gambit 
  

// for loop where i can capture all this summary data: list of openings, list of outcomes (but I want the outcomes to the openings), list of turns 
// bar, pie, bubble 
// drop down where you could change the opening move and then it would repopulate the charts 
// dataset of popular opening moves // original vs. popular 
// rating? rating and play? 
  

// d3.json("samples.json").then((data) => {
    //     var DataNames = data.names;
    //     DataNames.forEach((sample) => {
    //       menu
    //         .append("option")
    //         .text(sample)
    //     });
    
// function init() {
    //   // Creating the dropdown element using the proper ID
    //   var menu = d3.select("#selDataset");
    //   // Creating the select options
    //   d3.json("samples.json").then((data) => {
    //     var DataNames = data.names;
    //     DataNames.forEach((sample) => {
    //       menu
    //         .append("option")
    //         .text(sample)
    //     });
    //     // Building the initial data display with index 0
    //     const Sample = DataNames[0];
    //     VariousCharts(Sample);
    //     Metadata(Sample);
    //   });
    // }
// function Metadata(sample) {
//     d3.json("./static/chess_games_chart.json").then((data) => {
//       var metadata= data.metadata;
//     //   Utilizing the arrow method to call on the filter function
//     // Use sample_values as the values for the Demographic Info Table
//       var array= metadata.filter(samplevalue => samplevalue.id == sample);
//       var result= array[0]
//       var selectsample = d3.select("#sample-metadata");
//       selectsample.html("");
//       // Object.entries is a variation of the for loop where I can return a key value array
//       Object.entries(result).forEach(([a, b]) => {
//         selectsample.append("h5").text(`${a}: ${b}`);
//       });
//     });
//   }
// function VariousCharts(sample) {
//   d3.json("samples.json").then((data) => {
//     // Establishing my variables to be used in the charts later
//     var samples= data.samples;
//     var array= samples.filter(sampleobject => sampleobject.id == sample);
//     var result= array[0]
//     var labels = result.otu_labels;
//     var values = result.sample_values;
//     var ids = result.otu_ids;
//     // Build the Bubble Chart with Plotly
//     var Layout = {
//       xaxis: { title: "OTU ID" },
//       };
//       var trace1 = [
//       {
//         // Use sample_values for the y values, in this case the values are already filtered from sample
//         y: values,
//         // Use otu_ids for the x values
//         x: ids,
//         text: labels,
//         mode: "markers",
//         marker: {
//           // Use otu_ids for the marker colors
//           color: ids,
//           // Use sample_values for the marker size
//           size: values,
//           }
//       }
//     ];
//     console.log(samples);
//     console.log(array);
//     console.log(result);
//     console.log(labels);
//     console.log(values);
//     console.log(ids);
//     Plotly.plot("bubble", trace1, Layout);

//     //  Build the Bar Chart with Plotly
//     var trace2 =[
//       {
//         // Use otu_ids as the labels for the bar chart
//         // Limit 10 otu_ids and sorted in descending order
//         y:ids.slice(0, 10).map(otuID => `OTU ID ${otuID}`).reverse(),
//         x:values.slice(0,10).reverse(),
//         text:labels.slice(0,10).reverse(),
//         type:"bar",
//         // This will make the bar graph go horizontal
//         orientation:"h",
//         marker:{
//           color: 'rgb(26,118,255)',
//         }

//       }
//     ];
//     var barLayout = {
//       title: "Top 10 Bacteria",
//     };

//     Plotly.newPlot("bar", trace2, barLayout);
//   });
// }
   
// function init() {
//   // Creating the dropdown element using the proper ID
//   var menu = d3.select("#selDataset");
//   // Creating the select options
//   d3.json("samples.json").then((data) => {
//     var DataNames = data.names;
//     DataNames.forEach((sample) => {
//       menu
//         .append("option")
//         .text(sample)
//     });
//     // Building the initial data display with index 0
//     const Sample = DataNames[0];
//     VariousCharts(Sample);
//     Metadata(Sample);
//   });
// }
// function optionChanged(newSample) {
//   // Retrieve new data every time a new sample is chosen
//   VariousCharts(newSample);
//   Metadata(newSample);
// }
// // Initializing
// init();