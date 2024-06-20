// Image Carousel
// When adding a new image, don't forget to add its alt and its credits.
const images = [
  'images/img1.webp',
  'images/img2.webp',
  'images/img3.webp'
]
const alts = [
  'green wooden door on gray concrete floor',
  'a group of green plants with yellow flowers',
  'a white vase with a white flower in it'
]
const credits = [
  'Photo by <a href="https://unsplash.com/@jakenackos?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jake Nackos</a> on <a href="https://unsplash.com/photos/green-wooden-door-on-gray-concrete-floor-Ga7aBzN7qDw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
  'Photo by <a href="https://unsplash.com/@tyaglovsky?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Serhii Tyaglovsky</a> on <a href="https://unsplash.com/photos/a-group-of-green-plants-with-yellow-flowers-YO42OCYJrhU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
  'Photo by <a href="https://unsplash.com/@nataliekinnear?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Natalie Kinnear</a> on <a href="https://unsplash.com/photos/a-white-vase-with-a-white-flower-in-it-4eu57Wij3HQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>'
]
let currentIndex = 0;
const carouselImage = document.getElementById('carousel-img');
const figcaption = document.querySelector('figcaption');

function showImage(index) {
  // Ensure the index is within bounds
  if (index < 0) {
    currentIndex = images.length - 1;
  } else if (index >= images.length) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }
  carouselImage.src = images[currentIndex];
  carouselImage.alt = alts[currentIndex];
  figcaption.innerHTML = credits[currentIndex];
}

function showNextImage() {
  showImage(currentIndex + 1);
}

function showPreviousImage() {
  showImage(currentIndex - 1);
}

document.getElementById('next').addEventListener('click', showNextImage);
document.getElementById('prev').addEventListener('click', showPreviousImage);

// Dark/Light Mode Switch
const button = document.getElementById("mode-switch");
let mode = "dark";

// https://www.shecodes.io/athena/41313-how-to-apply-a-function-to-a-specific-button-in-javascript
button.addEventListener("click", function() {
  if (mode === "dark") {
    mode = "light";
    lightMode();
  } else if (mode === "light") {
    mode = "dark";
    darkMode();
  }
  console.log(mode);
});

function lightMode() {
  button.innerHTML = "Switch to Dark Mode";
  document.body.style.backgroundColor = "rgb(255, 255, 255)";
  document.querySelector("header").style.backgroundColor = "rgb(237, 237, 237)";
}

function darkMode() {
  button.innerHTML = "Switch to Light Mode";
  document.body.style.backgroundColor = "#121212";
  document.querySelector("header").style.backgroundColor = "#222222";
}