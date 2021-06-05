let temp = document.querySelector("#temp").textContent;
let speed = document.querySelector("#speed").textContent;
let windchill = "N/A";

if (temp <= 50 && speed > 3) {
  windchill = windChill(temp, speed);
}

document.querySelector("#windchill").innerHTML =
  windchill;

function windChill(t, s) {
  return Math.pow(t, 2);
}
