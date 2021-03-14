const scrollToElement = (tag) => {
  const element = document.querySelector(tag);
  const scrollPos =
    element.offsetTop - window.innerHeight / 2 + element.clientHeight / 2;

  window.scroll({
    top: scrollPos,
    left: 0,
    behavior: "smooth",
  });

  pageNav.classList.remove("opened");
  navOpener.classList.remove("opened");
};
