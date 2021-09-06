var header = document.querySelector("header");
var menu = document.getElementById("menu");
alturaHeader = parseFloat(getComputedStyle(header).height);

function Scroll(x) {
  window.addEventListener("scroll", (e) => {
    if (x.matches && window.scrollY == 0) {
      header.style.setProperty("background", "transparent"),
        header.style.setProperty("border-bottom", "none"),
        header.style.setProperty("height", "4rem"),
        header.style.setProperty("margin-top", "1em");
    } else {
      header.style.setProperty("background", "#ffffff"),
        header.style.setProperty("border-bottom", "1px solid #EDEDED"),
        header.style.setProperty("margin-top", "0");
    }
  });
}
var x = window.matchMedia("(min-width: 993px)");
Scroll(x);
x.addListener(Scroll);
