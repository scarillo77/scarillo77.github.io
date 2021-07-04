const townID = 5585010;
const weatherURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&appid=1b69c9b06ec079ff6ab30f6dbb3f8d8b";

fetch(weatherURL)
  .then((response) => response.json())
  .then((jsObject) => {
    document.querySelector("#curr-weather").textContent =
      jsObject.weather[0].description;
    document.querySelector("#temp").textContent = jsObject.main.temp.toFixed(1);
    document.querySelector("#humidity").textContent =
      jsObject.main.humidity + "%";
    document.querySelector("#wind").textContent =
      jsObject.wind.speed.toFixed(1) + " mph";
  });

let tempF = parseFloat(document.querySelector("#temp").textContent);
let windSpeed = parseFloat(document.querySelector("#wind").textContent);
if (windSpeed > 3 && tempF <= 50) {
  let windChill =
    35.74 +
    0.6215 * tempF -
    35.75 * Math.pow(windSpeed, 0.16) +
    0.4275 * tempF * Math.pow(windSpeed, 0.16);
  document.querySelector("#chill").innerHTML = windChill.toFixed(1) + "&#176;F";
} else {
  document.querySelector("#chill").textContent = "n/a";
}
