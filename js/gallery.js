// const galleryImage = document.querySelector(".image-slider img");

// const nextImage = document.querySelector(".next-image");
// const previousImage = document.querySelector(".previous-image");

// let curImageSrc = 1;

// nextImage.addEventListener("click", () => {
//   curImageSrc += 1;
//   galleryImage.src = `./images/img${curImageSrc}.jpg`;
// });

// previousImage.addEventListener("click", () => {
//   curImageSrc -= 1;
//   galleryImage.src = `./images/img${curImageSrc}.jpg`;
// });

const loadImages = () => {
  const galleryImagesContainer = document.querySelector(".image-slider");

  fetch(`${APIaddress}/gallery/getAll.php`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      galleryImagesContainer.innerHTML = "";
      res.forEach((image) => {
        if (parseInt(image.isVisible) === 1)
          galleryImagesContainer.innerHTML += `<img src="images/gallery/${image.name}" alt="" >`;
      });
    });
};

loadImages();
