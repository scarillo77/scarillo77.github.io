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

if (date.getDay() == 5) {
  document.querySelector("#banner").style.display = "block";
}

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
