// -------------- animation main -----------------

// -------------- Start PopUp js -----------------
// Star variables
const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".loginLink");
const registerLink = document.querySelector(".registerLink");

const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".iconClose");

// animacion de ventana flotante inicio secion/Registro
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
// fin animacion

// -------------- Start Section montains Octimustec -----------------
// Star variables
let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let montainsBehind = document.getElementById("montainsBehind");
let txtBrand = document.getElementById("txtBrand");
let btn = document.getElementById("btn");
let montainsFront = document.getElementById("montainsFront");
// execution of events scroll
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
// End the animation

// -------------- Start Animation BTN Go-Top -----------------

window.onscroll = function () {
  if (document.documentElement.scrollTop > 100) {
    document.querySelector(".gotopContainer").classList.add("show");
  } else {
    document.querySelector(".gotopContainer").classList.remove("show");
  }
};

document.querySelector(".gotopContainer").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
// end of BTN Go-Top
