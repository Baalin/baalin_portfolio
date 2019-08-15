var menuButton = document.querySelector(".menu-button");
var menu = document.querySelector(".menu");
var menuList = document.querySelector(".menu-list");
var menuBranding = document.querySelector(".menu-branding");
var menuGif = document.querySelector(".menu-gif");
var menuGifImage = document.querySelector(".menu-gif-image");

//var line1 = document.querySelector("#line-1");
//var line2 = document.querySelector("#line-2");
//var line3 = document.querySelector("#line-3");

//menuButton.addEventListener("click", function on(e) {
//  menuButton.classList.add("open");
//});
//
//const menuButtonOpen = document.querySelector(".menu-button .open");
//menuButtonOpen.addEventListener("click", function off(e) {
//  menuButton.classList.remove("open");
//});

var showMenu = false;

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuButton.classList.add("close");
    menu.classList.add("show");
    menuList.classList.add("show");
    menuBranding.classList.add("show");
    menuGif.classList.add("show");
    menuGifImage.classList.add("show");
    showMenu = true;
  } else {
    menuButton.classList.remove("close");
    menu.classList.remove("show");
    menuList.classList.remove("show");
    menuBranding.classList.remove("show");
    menuGif.classList.remove("show");
    menuGifImage.classList.remove("show");
    showMenu = false;
  }
}
