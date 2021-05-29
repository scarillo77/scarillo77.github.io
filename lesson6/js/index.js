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

let thedate = new Date();

if (thedate.getDay() == 5) {
  document.querySelector("#banner").style.display = "block";
}