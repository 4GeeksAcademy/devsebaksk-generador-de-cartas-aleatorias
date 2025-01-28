/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
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
  let nPalo = Math.floor(Math.random() * 4);
  let rndnumero = Math.floor(Math.random() * 13);

  let parafo = document.createElement("p");
  parafo.innerHTML = numero[rndnumero];
  document.getElementById("card").appendChild(parafo);
  let classPalo = palo[nPalo];
  const list = document.getElementById("card").classList;
  list.add(classPalo);
};
