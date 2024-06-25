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

/**
 * Ensure the image index is within the bounds of the images array,
 * Set the carousel image, its alt and its figcaption to correspond to that index
 * @param {int} index - The index of the image to be shown 
 */
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

/**
 * Increase the index by 1 and run the showImage method to update the image
 */
function showNextImage() {
  showImage(currentIndex + 1);
}

/**
 * Decrease the index by 1 and run the showImage method to update the image
 */
function showPreviousImage() {
  showImage(currentIndex - 1);
}

document.getElementById('next').addEventListener('click', showNextImage);
document.getElementById('prev').addEventListener('click', showPreviousImage);

// Dark/Light Mode Switch
const button = document.getElementById("mode-switch");
let mode = "dark";
let buttons = document.getElementsByTagName("button");

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

/**
 * Update the page to light mode
 */
function lightMode() {
  button.innerHTML = "Switch to Dark Mode";
  document.body.style.backgroundColor = "rgb(255, 255, 255)";

  document.querySelector("header").style.backgroundColor = "rgb(237, 237, 237)";
  document.getElementsByClassName("contact")[0].style.backgroundColor = "rgb(237, 237, 237)";
  document.querySelector("footer").style.backgroundColor = "rgb(237, 237, 237)";

  document.getElementsByClassName("work-section")[0].style.backgroundColor = "rgb(237, 237, 237)";

  // Change each button's class to light-mode
  // https://stackoverflow.com/questions/6405165/how-to-change-a-pseudo-class-style-through-javascript
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.color = "black";
    buttons[i].className = "light-mode";
  }
  document.getElementById("mode-switch").className = "light-mode";

  document.body.style.color = "black";
  document.querySelector("header").style.color = "black";
  document.querySelector("footer").style.color = "black";
}

/**
 * Update the page to dark mode
 */
function darkMode() {
  button.innerHTML = "Switch to Light Mode";
  document.body.style.backgroundColor = "#121212";

  document.querySelector("header").style.backgroundColor = "#222222";
  document.getElementsByClassName("contact")[0].style.backgroundColor = "#222222";
  document.querySelector("footer").style.backgroundColor = "#222222";

  document.getElementsByClassName("work-section")[0].style.backgroundColor = "#222222";

  // Change each button's class to none (i.e. the default, dark mode)
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.color = "white";
    buttons[i].className = "";
  }
  document.getElementById("mode-switch").className = "";

  document.body.style.color = "white";
  document.querySelector("header").style.color = "white";
  document.querySelector("footer").style.color = "white";
}
