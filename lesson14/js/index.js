document.querySelector("#lastmod").textContent = document.lastModified;

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

// Directory
const requestURL = "https://scarillo77.github.io/lesson14/json/info.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const business = jsonObject["business"];

    for (let i = 0; i < business.length; i++) {
      let card = document.createElement("div");
      let name = document.createElement("h2");
      let address = document.createElement("p");
      let images = document.createElement("img");
      let siteurl = document.createElement("p");
      let phone = document.createElement("p");

      h2.textContent = business[i].name;
      address.textContent = "Address:" + business[i].address;
      phone.textContent = "Phone Number:" + business[i].phone;
      siteurl.textContent = business[i].currentPopulation;
      images.setAttribute("src", business[i].photo);
      images.setAttribute("alt", "A photo of " + business[i].name);

      card.appendChild(h2);
      card.appendChild(address);
      card.appendChild(phone);
      card.appendChild(siteurl);
      card.appendChild(images);

      document.querySelector(".business").appendChild(card);
    }
  });