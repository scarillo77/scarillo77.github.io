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

const imagesToLoad = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

const imgOptions = {
  rootMargin: "0px 0px 50px 0px",
  threshold: 1,
};

if ("IntersectionObserver" in window) {
  const imgObserver = new IntersectionObserver((items) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        imgObserver.unobserve(item.target);
      }
    });
  }, imgOptions);

  imagesToLoad.forEach((img) => {
    imgObserver.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}

const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject["towns"];
    const prestonInfo = towns.filter((town) => town.name == "Preston" );
    for (let i = 0; i < prestonInfo[0].events.length; i++) {
      let event = document.createElement("p");
      event.textContent = prestonInfo[0].events[i];
      document.querySelector(".events").appendChild(event);
    }
  });
