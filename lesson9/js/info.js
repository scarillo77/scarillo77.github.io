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
      let card = document.createElement("div");
      let h3 = document.createElement("h3");
      let motto = document.createElement("p");
      let images = document.createElement("img");
      let year = document.createElement("p");
      let population = document.createElement("p");


      h3.textContent = weatherTowns[i].name;
      motto.textContent = weatherTowns[i].motto;
      images.setAttribute("src", weatherTowns.photo);
      images.setAttribute("alt", "A photo of " + weatherTowns[i].name);
      year.textContent = "Founded in " + weatherTowns[i].yearFounded;
      population.textContent =
        "Population: " + weatherTowns[i].currentPopulation;
      
      
      card.appendChild(h3);
      card.appendChild(motto);
      card.appendChild(images);
      card.appendChild(year);
      card.appendChild(population);
     
      

      document.querySelector(".town").appendChild(card);
    }
  });