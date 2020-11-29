//Notes from tutor session
// icon = '10d'
// var iconSource = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';
// var weatherImg = document.querySelector('#weatherIcon');
// weatherImg.src = iconSource;

// const API ="https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=minutely,hourly,daily,alerts&units=imperrial&appid=362fb79bb119545b691f8f1a6caf4816";
// ​
// $(document).ready(function () {
//   $.get(API, function (data) {
//     // Get reference to img tag
//     console.log(data);
//     // Plain Javascript
//     var img = document.querySelector('#icon');
// ​
//     // jQuery
//     // var img = $("#icon");

//     var icon = data.current.weather[0].icon;
//     var iconUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
// ​
//     console.log("icon: ", icon);
// ​
//     // Plain Javascript
//     img.src = iconUrl;
// ​
//     // jQuery
//     // img.attr('src', iconUrl);
//   });
// });
//Initializing City Search
const apiKey = "362fb79bb119545b691f8f1a6caf4816";
//var currentDate = "";
var pastCitySearches = [];
var currentCity;
var lon, lat;
//One call API
const API =
  "https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=minutely,hourly,daily,alerts&units=imperrial&appid=362fb79bb119545b691f8f1a6caf4816";

//use keycode methord or create function to use FA icon
$("#search-city").keypress(function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
  }
});

//input and data value box
$("#search-button").on("click", function () {
  $("#forecastFiveDay").addClass("render");
  currentCity = $("#search-city").val();
  $("#search-city").val("");
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    currentCity +
    "&appid=" +
    apiKey;
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    // Log the queryURL
    console.log("queryURL: ", queryURL);

    // Log the resulting object
    console.log("response.coord: ", response.coord);
    lat = response.coord.lat;
    lon = response.coord.lon;
  });
});

// Performing our AJAX GET request

// Here we are building the URL we need to query the database
// var queryURL =
//   "https://api.openweathermap.org/data/2.5/weather?" + currentCity + APIKey;

// Here we run our AJAX call to the OpenWeatherMap API
// $.ajax({
//   url: queryURL,
//   method: "GET",
// })
// We store all of the retrieved data inside of an object called "response"
// .then(function (response) {
//   // Log the queryURL
//   console.log(queryURL);

//   // Log the resulting object
//   console.log(response);

//   // Transfer content to HTML
//   $(".city").html("<h1>" + response.name + " Weather Details</h1>");
//   $(".wind").text("Wind Speed: " + response.wind.speed);
//   $(".humidity").text("Humidity: " + response.main.humidity);

//   // Convert the temp to fahrenheit
//   var tempF = (response.main.temp - 273.15) * 1.8 + 32;

//   // add temp content to html
//   $(".temp").text("Temperature (K) " + response.main.temp);
//   $(".tempF").text("Temperature (F) " + tempF.toFixed(2));

//   // Log the data in the console as well
//   console.log("Wind Speed: " + response.wind.speed);
//   console.log("Humidity: " + response.main.humidity);
//   console.log("Temperature (F): " + tempF);
// });
