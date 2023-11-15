/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generatorExcuse();
  });
  console.log("nain");
};
let generatorExcuse = () => {
  let who = ["Mi pájaro", "Mi zebra ", "Mi avion"];
  let acction = [
    "esta volando ",
    "esta jugando ",
    "esta votando ",
    "esta cortandose el pelo"
  ];
  let where = ["en la casa del presidente", "en la carretera m-50", "en sol"];

  let whoIndex = Math.floor(Math.random() * who.length);
  let acctionIndex = Math.floor(Math.random() * acction.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return who[whoIndex] + " " + acction[acctionIndex] + " " + where[whereIndex];
};
//write your code here
