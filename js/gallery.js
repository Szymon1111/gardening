const galleryImage = document.querySelector(".image-slider img");

const nextImage = document.querySelector(".next-image");
const previousImage = document.querySelector(".previous-image");

let curImageSrc = 1;

nextImage.addEventListener("click", () => {
  curImageSrc += 1;
  galleryImage.src = `./images/img${curImageSrc}.jpg`;
});

previousImage.addEventListener("click", () => {
  curImageSrc -= 1;
  galleryImage.src = `./images/img${curImageSrc}.jpg`;
});

const loadImages = () => {};
