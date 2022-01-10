"use strict";
const btn = document.querySelector(".show");
const summary = document.querySelector(".summary");
const overlay = document.querySelector(".overlay");

btn.addEventListener("click", () => {
  summary.classList.add("active");
  overlay.classList.add("inactive");
  const totalCases = document.querySelector(".total-cases");
  const newCases = document.querySelector(".new-cases");
  const totalDeaths = document.querySelector(".total-deaths");
  const newDeaths = document.querySelector(".new-deaths");
  //   document.querySelectorAll(".heading").style.opacity = "1";

  const url = `https://api.covid19api.com/summary`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      totalCases.textContent = data.Global.TotalConfirmed;
      newCases.textContent = data.Global.NewConfirmed;
      totalDeaths.textContent = data.Global.TotalDeaths;
      newDeaths.textContent = data.Global.NewDeaths;
    })
    .catch((error) => document.write(`Cannot fetch API`));
});
