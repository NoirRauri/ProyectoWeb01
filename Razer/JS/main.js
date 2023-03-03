// animacion de la primera seccion del main

// inicializar variables
let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let montainsBehind = document.getElementById("montainsBehind");
let txtBrand = document.getElementById("txtBrand");
let btn = document.getElementById("btn");
let montainsFront = document.getElementById("montainsFront");
// ejecucion de los eventos scroll
window.addEventListener("scroll", function () {
  let value = window.scrollY;
  stars.style.left = value * 0.25 + "px";
  moon.style.top = value * 1.05 + "px";
  montainsBehind.style.top = value * 0.5 + "px";
  montainsFront.style.top = value * 0 + "px";
  txtBrand.style.marginRight = value * 4 + "px";
  txtBrand.style.marginTop = value * 1.5 + "px";
  btn.style.marginTop = value * 1.5 + "px";
});
// fin de la animacion

const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".loginLink");
const registerLink = document.querySelector(".registerLink");

const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".iconClose");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});
