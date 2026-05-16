// NAVBAR SHADOW ON SCROLL

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){

    header.style.boxShadow = "0 2px 15px rgba(0,0,0,0.4)";

  }

  else{

    header.style.boxShadow = "none";

  }

});


// SIMPLE FRONTEND FORM HANDLING

const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  alert("Thank you! Your inquiry has been recorded.");

  form.reset();

});
