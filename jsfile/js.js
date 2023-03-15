let menuClick = false;
let nav = document.getElementById("nav-menu");
let infomenu = document.getElementById("Toggle-menu");

function Toggle() {
  if (!menuClick) {
    menuClick = true;
    nav.classList.toggle("active");
    infomenu.classList.toggle("goLeft");
    nav.classList.remove("not-active");
    infomenu.classList.remove("goRight");
  } else {
    menuClick = false;
    nav.classList.toggle("not-active");
    infomenu.classList.toggle("goRight");
    nav.classList.remove("active");
    infomenu.classList.remove("goLeft");
  }
}
nav.addEventListener("click", Toggle);
