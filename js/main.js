const navOpener = document.querySelector(".nav-opener");
const pageNav = document.querySelector(".page-nav");

navOpener.addEventListener("click", () => {
  pageNav.classList.toggle("opened");
  navOpener.classList.toggle("opened");
});

window.addEventListener("load", () => {
  const loading = document.querySelector(".loading");
  loading.style.opacity = "0";
  window.setInterval(() => {
    loading.style.display = "none";
  }, 1000);
});
