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

//let boton = document.getElementsByClassName("button");
//document.addEventListener("click", myFunction);

window.myFunction = function myFunction() {
  let nPalo = Math.floor(Math.random() * 4);
  let rndnumero = Math.floor(Math.random() * 13);
  let carta = document.createElement("div");
  let classPalo = palo[nPalo];
  let clase = "card " + classPalo;
  carta.className = clase;
  //card.setAttribute("class", classPalo);
  carta.innerHTML = "<div>" + numero[rndnumero] + "</div>";
  document.getElementById("mesa").appendChild(carta);
};
