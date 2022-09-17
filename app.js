const hamburger = document.querySelector("nav ul");
const menu = document.querySelector(".hamburger");
const reveal = document.querySelector(".reveal")

function change() {
    hamburger.classList.toggle("reveal");
    reveal.classList.toggle("hamburger")
}

// RESERVATION CODE BEGINS

const successMessage = document.querySelector(".user-info");

const form = document.querySelector("form");

const date = document.querySelector(".sex").value;

function submitted() { 
    form.style.display = "none";
    successMessage.style.display = "block";
    date.style.display = "block";
}


// RESERVATION CODE ENDS
