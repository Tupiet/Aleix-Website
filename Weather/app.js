const notificationElement = document.querySelector(".notification");
const iconElement = document.querySelector(".weather-icon");
const tempDivElement = document.querySelector(".temperature-div");
const tempElement = document.querySelector(".temperature-value p");
const maxMinElement = document.querySelector(".temperature-max-min p");
const humidityElement = document.querySelector(".humidity p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");

const weather = {};
weather.temperature = {
  unit: "celsius"  
}

const KELVIN = 273;

const key = "4f4e7f08085d77f2da8f50172a3a7c15";

if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser doesn't support geolocation.</p>"
}

function setPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeather(latitude, longitude);
}

function showError(error) {
    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p>${error.message}</p>`;
}

function getWeather(latitude, longitude) {
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
    

    fetch (api)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data) {
            weather.temperature.value = data.main.temp - KELVIN;
            weather.temperature.min = data.main.temp_min - KELVIN;
            weather.temperature.max = data.main.temp_max - KELVIN;
            weather.temperature.humidity = data.main.humidity;
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
        })
        .then(function() {
            displayWeather();
        });
}

function displayWeather() {
    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${Math.round(weather.temperature.value)}º<span>C</span>`;
    maxMinElement.innerHTML = `${Math.round(weather.temperature.min)}º<span>C</span> - ${Math.round(weather.temperature.max)}º<span>C</span>`;
    humidityElement.innerHTML = `${weather.temperature.humidity}% humidity`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}

function celsiusToFahrenheit(temperature) {
    return (temperature * 9/5) + 32;
}

tempDivElement.addEventListener("click", function() {
    if (weather.temperature.value === undefined) return;

    if (weather.temperature.unit == "celsius") {
        let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
        let fahrenheitMin = celsiusToFahrenheit(weather.temperature.min);
        let fahrenheitMax = celsiusToFahrenheit(weather.temperature.max);
        fahrenheit = Math.floor(fahrenheit);
        fahrenheitMin = Math.round(fahrenheitMin);
        fahrenheitMax = Math.round(fahrenheitMax);

        tempElement.innerHTML = `${fahrenheit}º<span>F</span>`;
        maxMinElement.innerHTML = `${fahrenheitMin}º<span>F</span> - ${fahrenheitMax}º<span>F</span>`;
        weather.temperature.unit = "fahrenheit";
    } else {
        tempElement.innerHTML = `${Math.round(weather.temperature.value)}º<span>C</span>`;
        maxMinElement.innerHTML = `${Math.round(weather.temperature.min)}º<span>C</span> - ${Math.round(weather.temperature.max)}º<span>C</span>`;
        weather.temperature.unit = "celsius";
    }
});