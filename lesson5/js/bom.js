document.querySelector("#lastmod").textContent = document.lastModified;

let date = new Date();
let year = date.getFullYear();

document.querySelector("#theyear").textContent = year;


const list = document.querySelector("#list");
const input = document.querySelector("#input");
const button = document.querySelector("#button");

button.onclick = function () {
  let myItem = input.value;
  input.value = "";

  const listItem = document.createElement("li");
  const listText = document.createElement("span");
  const listBtn = document.createElement("button");

  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(listBtn);
  listBtn.textContent = "Delete";
  list.appendChild(listItem);

  listBtn.onclick = function (e) {
    list.removeChild(listItem);
  };

  input.focus();
};
