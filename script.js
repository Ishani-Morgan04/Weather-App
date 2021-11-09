//Feature 1

let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "0ctober",
  "November",
  "December"
];

let day = days[now.getDay()];
let month = months[now.getMonth()];
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

if (hours < 10) {
  hours = "0" + hours;
}
if (minutes < 10) {
  minutes = "0" + minutes;
}

let currentDate = document.querySelector("#currentDate");
currentDate.innerHTML = `${day}, ${date} ${month} ${year} <br> ${hours}:${minutes}`;

//Feature 2
function searchCountry(event) {
  event.preventDefault();
  let currentInput = document.querySelector("#searchInput");

  let nowCity = document.querySelector("#nowCity");
  nowCity.innerHTML = `${currentInput.value}`;
}
let form = document.querySelector("#cityForm");
form.addEventListener("submit", searchCountry);

// Bonus Feature
function updateCelcius(event) {
  event.preventDefault();
  let unitsDegree = document.querySelector("#currentTemperature");
  unitsDegree.innerHTML = 25;
}
let celcius = document.querySelector("#celciusTemp");
celcius.addEventListener("click", updateCelcius);

function updateFahrenheit(event) {
  event.preventDefault();
  let unitsDegree = document.querySelector("#currentTemperature");
  unitsDegree.innerHTML = 77;
}
let fahrenheit = document.querySelector("#fahrenheitTemp");
fahrenheit.addEventListener("click", updateFahrenheit);

//WEEK 5 HOMEWORK
function displayWeatherCondition(response) {
  //console.log(response.data);
  document.querySelector("#nowCity").innerHTML = response.data.name;
  //console.log(response.data.name);
  document.querySelector("#currentTemperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

function search(nowCity) {
  let apiKey = "9fff992f31953220b9b904c14ec2ac31";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${nowCity}&units=metric&appid=${apiKey}`;

  axios.get(apiURL).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let nowCity = document.querySelector("#searchInput").value;
  search(nowCity);
}

function searchLocation(position) {
  let apiKey = "9fff992f31953220b9b904c14ec2ac31";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${apiKey}`;

  axios.get(apiURL).then(displayWeatherCondition);
}

function getCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}
//Default City
search("MADRID");

let currentCityButton = document.querySelector("#current-button");
currentCityButton.addEventListener("click", getCurrentPosition);
