const scrollToElement = (tag, elementPart = "CENTER") => {
  const element = document.querySelector(tag);
  let scrollPos = 0;

  if (elementPart = "CENTER") {
    scrollPos =
      element.offsetTop - window.innerHeight / 2 + element.clientHeight / 2;
  } 
  else if (elementPart = "TOP") {
    scrollPos = element.offsetTop;
  }

  window.scroll({
    top: scrollPos,
    left: 0,
    behavior: "smooth",
  });

  pageNav.classList.remove("opened");
  navOpener.classList.remove("opened");
};
