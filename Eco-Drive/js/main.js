/* actuale tijd en datum */

var today = new Date();

var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

document.getElementById("js--date").innerHTML = date;


/* een klok die per seconden refreshed */
function startTime(){
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    var time = hours + ':' + minutes;
    document.getElementById("js--time").innerHTML = time;
    setTimeout(function(){startTime()}, 1000 );
}



/**Dit is de staaf diagram */

var stars = [135850, 52122];
var frameworks = ['Dodo Diamond hacks', 'Dodo Cotw pro']; 

var ctx = document.getElementById('myChart');

var myChart = new Chart(ctx, {
    type: 'bar', 
    data: {
        labels: frameworks,
        datasets: [{
             label: 'Energie Verbruik in KwH',
             data: stars,
             backgroundColor: [
             "rgba(255, 99, 132, 0.2)",
             "rgba(54, 162, 235, 0.2)",
             "rgba(255, 206, 86, 0.2)",
             "rgba(75, 192, 192, 0.2)",
             "rgba(153, 102, 255, 0.2)" ],
             borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
             ],
             borderWidth: 3,
             borderRadius: 30,

            }]


  },
 });


 Chart.defaults.font.size = 12;
let chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 14
                    }
                }
            }
        }
    }
});