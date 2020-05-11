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

var apiKey = "02d40ed26b4d772b862c1e7d6d86ac72";
//const today = moment().format("MM-DD-YY");

$("#userSearch").on("submit", function (event) {
  event.preventDefault();

  //get form values
  var cityName = $("#user-location").val();
  var state = $("#user-state").val();
  getCurrentWeather(cityName, state);
});

function getCurrentWeather(cityName, state) {
  var weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${state},US&appid=${apiKey}&units=imperial`;

  $.ajax({
    url: weatherURL,
    method: "GET",
  }).then(function (response) {
    // update city weather information
    var lat = response.coord.lat;
    var lon = response.coord.lon;
    $(".city").text(`${response.name}`);
    $(".date").text(`Date: ${moment().format("MMM Do YY")}`);
    $(".wind").text(`Wind: ${response.wind.speed} mph`);
    $(".humidity").text(`Humidity: ${response.main.humidity}`);
    $(".temp").text(`Temperature: ${response.main.temp}`);
    getUVIndex(lat, lon);
    get5DayForecast(cityName, state);
  });
}

function getUVIndex(lat, lon) {
  $.get(
    `http://api.openweathermap.org/data/2.5/uvi?appid=${apiKey}&lat=${lat}&lon=${lon}`,
    function (response) {
      $(".uv").text(`UV Index: ${response.value}`);
    } //(<span class="uk-badge">1</span>),
  );
}

function get5DayForecast(cityName, state) {
  var weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName},${state},US&appid=${apiKey}&units=imperial`;

  $.ajax({
    url: weatherURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);

    // update 5day forecast weather information
    for (var i = 0; i < 5; i++) {
      var date5 = $(".date5").text(`Date: ${response.list[i].clouds.dt_txt}`);
      //var icon = $(".icon").text(`${response.list[i].weather.icon}`);
      var humidity5 = $(".humidity5").text(
        `Humidity: ${response.list[i].main.humidity}`
      );
      var temp5 = $(".temp5").text(
        `Temperature: ${response.list[i].main.temp}`
      );
    }
  });
}

/*
inside of that you're goint to generate the city, date, temp, humidity, wind speed

get weather icon (is it in the response?)
create 5daysforecast function
include the dates, temp, humidity
dynamically generated using JS
using bs cards generate a card that includes <p>, <img>, <h2>, <icon>

store user search in local storage
on page load, grab from local storage - grab the most recent search
if the users search exstin local storage, do't append a new one to the searches, just grab from local storage
in the getCurrentWeather function, check local storage for previous searches */

function saveWeatherSearch(cityName, state) {
  userSearch[search] = cityName;
  localStorage.setItem(search, JSON.stringify(userSearch));
}
