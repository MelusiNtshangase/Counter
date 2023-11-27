"use strict";

const value = document.getElementById("value");
const counterBtns = document.querySelectorAll(".btn");

let counter = 0;

counterBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const target = e.currentTarget.classList;

    if (target.contains("increase")) counter++;
    if (target.contains("decrease")) counter--;
    if (target.contains("reset")) counter = 0;

    if (counter > 0) value.style.color = "green";
    if (counter < 0) value.style.color = "red";
    if (counter === 0) value.style.color = "black";

    value.textContent = counter;
  });
});

console.log("Hello World");
