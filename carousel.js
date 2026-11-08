// ########## IMAGE CAROUSEL CODE ########## //
const image = document.querySelector(".carousel-image");
const previousPreview = document.querySelector(".carousel-preview-previous");
const nextPreview = document.querySelector(".carousel-preview-next");
const status = document.querySelector(".carousel-status");
const caption = document.querySelector(".carousel-caption");
const buttons = document.querySelectorAll(".carousel-button");
let currentIndex = 0;

function showImage(index) {
  currentIndex = (index + images.length) % images.length;

  const previousIndex = (currentIndex - 1 + images.length) % images.length;
  const nextIndex = (currentIndex + 1) % images.length;

  image.src = images[currentIndex].src;
  image.alt = images[currentIndex].alt;
  previousPreview.src = images[previousIndex].src;
  nextPreview.src = images[nextIndex].src;
  status.textContent = `${currentIndex + 1} / ${images.length}`;
  caption.textContent = images[currentIndex].caption;
}

buttons[0].addEventListener("click", () => showImage(currentIndex - 1));
buttons[1].addEventListener("click", () => showImage(currentIndex + 1));

showImage(0);