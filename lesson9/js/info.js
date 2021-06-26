const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject["towns"];
    for (let i = 0; i < towns.length; i++) {
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let date = document.createElement("p");
      let place = document.createElement("p");
      let image = document.createElement("img");

      h2.textContent = towns[i].name + " " + towns[i].motto;
      image.src = towns[i].photos;
      image.alt =
        towns[i].name + " " + towns[i].motto + " - " + towns[i].yearFounded;

      card.appendChild(h2);
      card.appendChild(date);
      card.appendChild(image);
      document.querySelector("div.cards").appendChild(card);
    }
  });
