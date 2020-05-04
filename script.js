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

function getUVIndex(lat, lon) {
    var APIKey = your api key
    $.get(`http://api.openweathermap.org/data/2.5/uvi?appid={APIKey}&lat={lat}&lon={lon}`), function (response)
}
// an input to allow the suer to search for the city
        // grab the users input and tore it in a variable (userSearch)
        //create a function that get the current weather  (current weater data call)
        // dynamically generate current wether div
        //inside of that you're goint to generate the city, date, temp, humidity, wind speed

        //if you're going to call the ght getUVindex fuctionto generat the UV index element:

     
        //create 5daysforecast function
        // include the dates, temp, humidity
        // dynamically generated using JS
        // using bs cards generate a card that includes <p>, <img>, <h2>, <icon>

        // store user search in local storage
        // on page load, grab from local storage - grab the most recent search
        // if the users search exstin local storage, do't append a new one to the searches, just grab from local storage
        // in the getCurrentWeather function, check local storage for previous searches

        // you'll need at least 3 different functions: get current weather, get 5 days forecast, get uv index