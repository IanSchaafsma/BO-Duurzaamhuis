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
var frameworks = ['Apparaat 1', 'Apparaat 2']; 

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
             borderRadius: 35,

            }]


  },
 });






/* Script grafiek*/
const labels = [
    'ding 1',
    'ding 2',
    'ding 3',
    'ding 4',
    'ding 5',
    'ding 6',
];
  
  const data = {
    labels: labels,
    datasets: [{
      label: 'Gevevens opdracht Bo',
      backgroundColor: 'rgba(75, 192, 192, 1)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 40, 5, 2, 20, 30, 45],
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
};

  const myChart2 = new Chart(
    document.getElementById('myChart2'),
    config
  );

/* Weerbericht */

const locatie = "Amsterdam";
const key = "ee2722efec52d9ea3a952f8cd36220f2";
const API = `https://api.openweathermap.org/data/2.5/weather?q=${locatie}&appid=${key}&units=metric`;

fetch(API)
    .then(results => results.json())
    .then(results => {
        document.getElementById("name").innerHTML = results.name;

        const icon = results.weather[0].icon;
        document.getElementById("icon").innerHTML = `<img src=https://openweathermap.org/img/wn/${icon}@2x.png>`;

        document.getElementById("temp").innerHTML = Math.round(results.main.temp) + "°C";

        const res = results.weather[0].description;
        const array = res.split(" ");
        for (var i = 0; i < array.length; i++) {
            array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
            const str2 = array.join(" ");
        }
        const str2 = array.join(" ");
        document.getElementById("description").innerHTML = str2;
    })
    .catch(error => console.log(error));

