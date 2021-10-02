sample = "static/top_women_chess_players_aug_2020.json"
// var gdata
// Attempting to use google charts
google.charts.load('current',{packages:['corechart']});
google.charts.setOnLoadCallback(drawChart);
name_list = []
function drawChart() {
    d3.json(sample).then(function(dataValues) {
        console.log(dataValues); 
            var data = new google.visualization.DataTable();  
  
                data.addColumn('number', 'money');  
                data.addColumn('number', 'Ratings');
                data.addColumn({type: 'string', role: 'tooltip'});

    
            for (var i = 0; i < dataValues.length; i++)
            
            {  
                try{
                data.addRow([parseInt(dataValues[i].Rapid_rating), parseInt(dataValues[i].Standard_Rating), dataValues[i].Name] ); 
                } catch(error){console.error(error)}
            }
            // data.addColumn('number', name_list); 
            // console.log(data)

  var options = {
    tooltip: {isHtml: true},
    title: 'Tournament Ratings',
    // hAxis: {title: 'Rapid Rating', minValue: 1800, maxValue: 3000},
    hAxis: {title: 'Rapid Rating',
            viewWindow: {
                min: 1210,
                max: 2700
            }},
    // vAxis: {title: 'Standard Rating', minValue: 1800, maxValue: 2700},
    vAxis: {title: 'Standard Rating',
        viewWindow:{
            min: 1800,
            max: 2700,
        }
        // ticks: [1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700]
    },
    legend: 'none',
    pointSize: 0.2,
  };

  var chart = new google.visualization.ScatterChart(document.getElementById('scatter'));

  chart.draw(data, options);
});
}
// Maybe this one

// let name_list = []
// let standard_rating_list = []
// let rapid_rating_list = []
// // Create Bar Chart
// // function barChart(){
// d3.json(sample).then(function(data) {
//     console.log(data);
//     // gdata = data

//     for (i =0; i < data.length; i++){
//         name_list.push(data[i].Name)
//         standard_rating_list.push(data[i].Standard_Rating)
//         rapid_rating_list.push(data[i].Rapid_rating)
//         // var names_id = data[i].Fideid   
//     }
//     console.log(name_list)
//     console.log(standard_rating_list)
//     // g = gdata[0]["Fideid"]
//     // console.log(g)
//         // Slice the first 10 objects for plotting
//         slicedRating = standard_rating_list.slice(0, 15);
//         slicedRapid = rapid_rating_list.slice(0,15);
//         slicedNames = name_list.slice(0,15);
//         slicedNames = slicedNames.map(L => "ID " + L)


//     // // Trace1 for the OTU Data

//     let trace1 = {
//         x: rapid_rating_list,
//         y: standard_rating_list,
//         mode: 'markers',
//         type: 'scatter',
//         name: 'Women Grand Masters',
//         text: name_list,
//         // textposition: 'top center',
//         textfont: {
//             family:  'Raleway, sans-serif'
//         },
//         marker: { size: 2 }
//         };

//         // text: slicedNames,
//         // name: "Tournament Bar Chart",
//         // type: "bar"
//         // // orientation: "h"
//         // };
  
//   let traceData = [trace1];

//   var layout = {
//     title: {
//       text:'Tournament Ratings',
//     //   font: {
//     //     family: 'Courier New, monospace',
//     //     size: 24
//     //   },
//     //   xref: 'paper',
//     //   x: 0.05,
//     },
//     xaxis: {
//       title: {
//         text: 'Rapid Rating',
//         // font: {
//         //   family: 'Courier New, monospace',
//         //   size: 18,
//         //   color: '#7f7f7f'
//         // }
//       },
//     },
//     yaxis: {
//       title: {
//         text: 'Standard Rating',
//         // font: {
//         //   family: 'Courier New, monospace',
//         //   size: 18,
//         //   color: '#7f7f7f'
//         // }
//       }
//     }
//   };
  
//   // Note that we use `traceData` here, not `data`
//   Plotly.newPlot("scatter", traceData, layout);


    
//   });