/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let palo = ["spade", "club", "heart", "diamond"];
let numero = [
  "A",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

window.onload = function() {
  //write your code here

  let nPalo = Math.floor(Math.random() * 4);
  let rndnumero = Math.floor(Math.random() * 13);

  let parafo = document.createElement("div");
  parafo.innerHTML = numero[rndnumero];
  document.getElementById("card").appendChild(parafo);
  let classPalo = palo[nPalo];
  const list = document.getElementById("card").classList;
  list.add(classPalo);
};

window.myFunction = function myFunction() {
  let nPalo = Math.floor(Math.random() * 4);
  let rndnumero = Math.floor(Math.random() * 13);
  let parafo = document.createElement("div");

  const card = document.getElementById("card");
  card.removeChild(card.firstElementChild);
  card.removeAttribute("class");

  parafo.innerHTML = numero[rndnumero];
  document.getElementById("card").appendChild(parafo);
  let classPalo = palo[nPalo];
  const list = document.getElementById("card").classList;
  list.add("card");
  list.add(classPalo);
};
