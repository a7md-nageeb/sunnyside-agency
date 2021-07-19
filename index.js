/*jshint esversion: 6 */

const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("nav-ul");
const rec = document.getElementById("ul-box");

hamburger.addEventListener("click", () => {
  navUL.classList.toggle("show");
  rec.classList.toggle("show");
})
