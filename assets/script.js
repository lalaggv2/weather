// User Story
// AS A traveler
// I WANT to see the weather outlook for multiple cities
// SO THAT I can plan a trip accordingly

// Acceptance Criteria
// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
// WHEN I open the weather dashboard
// THEN I am presented with the last searched city forecast

      //var userLocation = $("#user-location");
      $("#user-search").on("click", function (event) {
        event.preventDefault();

        //   $("#user-state").on("click", function (event) {
        //  event.preventDefault();

        var cityName = $("#user-location").val();
        var state = $("#user-state").val();
        var apiKey = "02d40ed26b4d772b862c1e7d6d86ac72";
        var weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName},${state},US&appid=${apiKey}`;

        //      `https://api.openweathermap.org/data/2.5/weather?q=Boston,MA&appid=${apiKey}`;

        //var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&appid=${apiKey}`;

        $.ajax({
          url: weatherURL,
          method: "GET",
        }).then(function (response) {
          //$('#userSearch').text(JSON.stringify(response));
          //console.log(weatherURL);
          console.log(response);
        });
// var userLocation = $("#user-location");
// var state = $("#user-state");
// var apiKey = "02d40ed26b4d772b862c1e7d6d86ac72";
// var weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${userLocation},${state}&appid=${apiKey}`;
// //var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&appid=${APIKey}`;
// //var url = "https://jsonplaceholder.typicode.com/todos";
// $.ajax({
//   url: weatherURL,
//   method: "GET",
// }).then(function (response) {
//   //$('#userSearch').text(JSON.stringify(response));
//   //console.log(weatherURL);
//   console.log(response);
// });


//var userSearch = $(InputEvent)

// $.get(url).then(function (response) {
//     console.log(response);
//})

function renderButtons() {
  movies.forEach(function (movie) {
    var movieBtn = $("<button>", {
      class: 'movie',
      "data-name": movie,
    }).text(movie);

    $('buttons-view').append(moviesBtn);

  });

  var row = $("<div class='row'>");
    var hour = $(`<div class= "col-md-2">`);
    var task = $(`<input id=${i} class="todo-item col-md-6">`);
    var save = $(`<button id='save' class= "col-md-1" data-hour=${i}>`);
var city = response.name;
    var wind = $(`<div class= "col-md-2", response.wind.speed>`) ;
    var humidity = response.main.humidity;
    var temp = response.main.temp;
    var tempinF = Math.round((temp * 9) / 5 - 459.67);
    $('.city').text(`City: ${city}`);
    $('.wind').text(`Wind: ${wind}`);
    4('.humidity').text(`Humidity: ${humidity}`);


// an input to allow the suer to search for the city
// grab the users input and tore it in a variable (userSearch)
//create a function that get the current weather  (current weater data call)
/*dynamically generate current wether div
inside of that you're goint to generate the city, date, temp, humidity, wind speed

you'll need at least 3 different functions: get current weather, get 5 days forecast, get uv index

if you're going to call the ght getUVindex fuctionto generat the UV index element:

create 5daysforecast function
include the dates, temp, humidity
dynamically generated using JS
using bs cards generate a card that includes <p>, <img>, <h2>, <icon>

store user search in local storage
on page load, grab from local storage - grab the most recent search
if the users search exstin local storage, do't append a new one to the searches, just grab from local storage
in the getCurrentWeather function, check local storage for previous searches */

function getUVIndex(lat, lon) {
  var APIKey = your api key
  $.get(`http://api.openweathermap.org/data/2.5/uvi?appid={APIKey}&lat={lat}&lon={lon}`), function (response)
}
var lat = response.city.coord.lat;
var lon = response.city.coord.lon;