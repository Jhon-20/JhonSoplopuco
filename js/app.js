/********VARIABLES*****************/
let header = document.querySelector("header");
let menu = document.getElementById("menu");
let links = document.querySelectorAll(".link");
let link_trabajos = document.querySelector(".link_trabajos");

/******HEADER SCROOL******** */
alturaHeader = parseFloat(getComputedStyle(header).height);
function Scroll(x) {
  window.addEventListener("scroll", (e) => {
    if (x.matches && window.scrollY == 0) {
      header.style.setProperty("background", "transparent"),
        header.style.setProperty("border-bottom", "none"),
        header.style.setProperty("height", "6rem");
      for (const header_link of links) {
        header_link.style.setProperty("color", "#ffffff");
      }
    } else {
      header.style.setProperty("background", "#ffffff"),
        header.style.setProperty("border-bottom", "1px solid #EDEDED"),
        header.style.setProperty("margin-top", "0");
      header.style.setProperty("height", "4rem");
      for (const header_link of links) {
        if (header_link != link_trabajos) {
          header_link.style.setProperty("color", "gray");
        }
      }
    }
  });
}
var x = window.matchMedia("(min-width: 992px)");
Scroll(x);
x.addListener(Scroll);
let menu_bar = document.querySelector(".menu_bar");

/***********ACTIVAR MENU RESPONSIVE********** */
menu_bar.onclick = function () {
  menu.classList.toggle("menu_show");
};
