document.querySelector("#lastmod").textContent = document.lastModified;

let date = new Date();
let year = date.getFullYear();

document.querySelector("#theyear").textContent = year;


const input = document.querySelector("#input");

const button = document.querySelector("submit");