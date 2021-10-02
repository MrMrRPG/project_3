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
    vAxis: {title: 'Standard Rating', minValue: 1800, maxValue: 2700},
    legend: 'none',
    // legend: name_list,
    pointSize: 0.2,
  };

  var chart = new google.visualization.ScatterChart(document.getElementById('scatter'));

  chart.draw(data, options);
});
}