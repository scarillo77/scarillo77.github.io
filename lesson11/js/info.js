let date = new Date();
let year = date.getFullYear();

document.querySelector("#theyear").textContent = year;

const hambutton = document.querySelector(".ham");
const mainnav = document.querySelector(".navigation");

hambutton.addEventListener(
  "click",
  () => {
    mainnav.classList.toggle("responsive");
  },
  false
);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {
  if (window.innerWidth > 760) mainnav.classList.remove("responsive");
};

const datefield = document.querySelector("#date");

const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  date
);

datefield.textContent = fulldate;

const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject["towns"];
    const weatherTowns = towns.filter(
      (town) =>
        town.name == "Preston" ||
        town.name == "Soda Springs" ||
        town.name == "Fish Haven"
    );

    for (let i = 0; i < weatherTowns.length; i++) {
      let card = document.createElement("div");
      let h3 = document.createElement("h3");
      let motto = document.createElement("p");
      let images = document.createElement("img");
      let year = document.createElement("p");
      let population = document.createElement("p");

      h3.textContent = weatherTowns[i].name;
      motto.textContent = weatherTowns[i].motto;
      images.setAttribute("src", weatherTowns[i].photo);
      images.setAttribute("alt", "A photo of " + weatherTowns[i].name);
      year.textContent = "Year Founded:" + weatherTowns[i].yearFounded;
      population.textContent =
        "Population: " + weatherTowns[i].currentPopulation;

      card.appendChild(h3);
      card.appendChild(motto);
      card.appendChild(year);
      card.appendChild(population);
      card.appendChild(images);

      document.querySelector(".town").appendChild(card);
    }
  });
