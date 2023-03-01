let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let montainsBehind = document.getElementById("montainsBehind");
let txtBrand = document.getElementById("txtBrand");
let btn = document.getElementById("btn");
let montainsFront = document.getElementById("montainsFront");

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
