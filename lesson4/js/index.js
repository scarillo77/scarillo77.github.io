document.querySelector('#lastmod').textContent = document.lastModified;

let date = new Date();
let year = date.getFullYear();

document.querySelector('#theyear').textContent = year;

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