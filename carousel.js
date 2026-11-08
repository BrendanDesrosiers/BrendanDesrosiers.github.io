const image = document.querySelector(".carousel-image");
const status = document.querySelector(".carousel-status");
const caption = document.querySelector(".carousel-caption");
const buttons = document.querySelectorAll(".carousel-button");
let currentIndex = 0;
const counter = document.querySelector(".carousel-status");

function showImage(index) {
    currentIndex = (index + images.length) % images.length;
    image.src = images[currentIndex].src;
    image.alt = images[currentIndex].alt;
    counter.textContent = `${currentIndex + 1} / ${images.length}`;
    caption.textContent = images[currentIndex].caption;
}

buttons[0].addEventListener("click", () => showImage(currentIndex - 1));
buttons[1].addEventListener("click", () => showImage(currentIndex + 1));