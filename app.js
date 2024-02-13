const button = document.querySelector('button');

function getWeather() {
    const apiKey = 'c5740d7c05ad5b2d0006ac9d2b32beb3'; //my api key
    const city = document.getElementById('city').value;

    if(!city) {
        alert("Please enter a city");
        return;
    }
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

}