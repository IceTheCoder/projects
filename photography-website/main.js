const images = [
  'images/img1.jpg',
  'images/img2.jpg',
  'images/img3.jpg'
]
let currentIndex = 0;
const carouselImage = document.getElementById('carousel-img');

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
}

function showNextImage() {
  showImage(currentIndex + 1);
}

function showPreviousImage() {
  showImage(currentIndex - 1);
}

document.getElementById('next').addEventListener('click', showNextImage);
document.getElementById('prev').addEventListener('click', showPreviousImage);