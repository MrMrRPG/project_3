sample = "static/top_women_chess_players_aug_2020.json"

// Using google charts
google.charts.load('current',{packages:['corechart']});
google.charts.setOnLoadCallback(drawChart);
name_list = []
function drawChart() {
    d3.json(sample).then(function(dataValues) {
        console.log(dataValues); 
            var data = new google.visualization.DataTable();  
  
                data.addColumn('number', 'Ratings');  
                data.addColumn('number', 'Ratings');
                data.addColumn({type: 'string', role: 'tooltip'});

    
            for (var i = 0; i < dataValues.length; i++)
            
            {  
                try{
                data.addRow([parseInt(dataValues[i].Rapid_rating), parseInt(dataValues[i].Standard_Rating), dataValues[i].Name] ); 
                } catch(error){console.error(error)}
            }

  var options = {
    tooltip: {isHtml: true},
    title: 'Women Grand Master Tournament Ratings',
    hAxis: {title: 'Rapid Rating',
            viewWindow: {
                min: 1210,
                max: 2700
            }},
    vAxis: {title: 'Standard Rating',
        viewWindow:{
            min: 1800,
            max: 2700,
        }
    },
    legend: 'none',
    colors: ['#AA4A7F'],
    pointSize: 0.2,
  };

  var chart = new google.visualization.ScatterChart(document.getElementById('scatter'));

  chart.draw(data, options);
});
}
