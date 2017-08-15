var menu = document.querySelector(".main-nav");
var menu_close = document.querySelector(".main-nav__menu-closer");

menu_close.addEventListener("click", function() {
  if(menu.classList.contains("main-nav--opened")) {
    menu.classList.remove("main-nav--opened");
  } else {
    menu.classList.add("main-nav--opened");
  }
})
