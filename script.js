// script.js

console.log("Bean & Brew Café Website Loaded");

window.addEventListener("scroll", function(){

  const header = document.querySelector(".header");

  header.classList.toggle("sticky", window.scrollY > 50);

});