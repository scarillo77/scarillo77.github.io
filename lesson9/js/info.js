const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject["towns"];
    const weatherTowns = towns.filter(
      (town) =>
        town.name == "Soda Springs" ||
        town.name == "Fish Haven" ||
        town.name == "Preston"
    );

    for (let i = 0; i < weatherTowns.length; i++) {
      let blurb = document.createElement("div");
      let h3 = document.createElement("h3");
      let mottoP = document.createElement("p");
      let image = document.createElement("img");
      let yearP = document.createElement("p");
      let populationP = document.createElement("p");
      let rainP = document.createElement("p");

      h3.textContent = weatherTowns[i].name;
      mottoP.textContent = weatherTowns[i].motto;
      image.setAttribute("src", weatherTowns[i].photo);
      image.setAttribute("alt", "A photo of " + weatherTowns[i].name);
      yearP.textContent = "Founded in " + weatherTowns[i].yearFounded;
      populationP.textContent =
        "Population: " + weatherTowns[i].currentPopulation;
      rainP.textContent =
        "Yearly rainfall: " + weatherTowns[i].averageRainfall + " in";

      blurb.appendChild(h3);
      blurb.appendChild(mottoP);
      blurb.appendChild(image);
      blurb.appendChild(yearP);
      blurb.appendChild(populationP);
      blurb.appendChild(rainP);

      document.querySelector(".town").appendChild(blurb);
    }
  });
