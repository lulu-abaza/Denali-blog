// start hamburger menu 
const menu = document.querySelector(".nav-menu-items");
const menuItems = document.querySelectorAll(".nav-item");
const hamburger= document.querySelector(".nav-menu-toggle");
const menuIcon = document.querySelector(".nav-menu-toggle");

function toggleMenu() {
  if (menu.classList.contains("nav-menu-show")) {
    menu.classList.remove("nav-menu-show");
    menuIcon.classList.remove("menu-icon-active");
  } else {
    menu.classList.add("nav-menu-show");
    menuIcon.classList.add("menu-icon-active");
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)
// end hamburger menu 
// start form 
const form = document.querySelector("form");
const submitBtn = document.getElementById("submit");
const successMsg = document.getElementById("success-message");

function success() {
  form.classList.add("d-none");
  submitBtn.classList.add("d-none");
  successMsg.classList.add("d-block");
}

submitBtn.addEventListener("click", success);
// end form 

