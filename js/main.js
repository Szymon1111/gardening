const APIaddress = "http://localhost/gardening/API/";
// const APIaddress = "http://gardeningapi.epizy.com/API";

const navOpener = document.querySelector(".nav-opener");
const pageNav = document.querySelector(".page-nav");

navOpener.addEventListener("click", () => {
  pageNav.classList.toggle("opened");
  navOpener.classList.toggle("opened");
});

window.addEventListener("load", () => {
  const loading = document.querySelector(".loading");
  loading.style.opacity = "0";
  window.setTimeout(() => {
    loading.style.display = "none";
    // document.querySelector("body").style.overflow = "auto";
  }, 2000);
});

const home = document.querySelector(".home");
home.addEventListener("click", (event) => {
  if (window.innerWidth > 1024 && event.clientX < window.innerWidth / 2)
    home.classList.toggle("opened");
});
