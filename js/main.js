const navOpener = document.querySelector(".nav-opener");
const pageNav = document.querySelector(".page-nav");

navOpener.addEventListener("click", () => {
  pageNav.classList.toggle("opened");
  navOpener.classList.toggle("opened");
});

window.addEventListener("load", () => {
  document.querySelector(".loading").style.opacity = "0";
});
