// Dark/Light Mode Switch
const button = document.getElementById("mode-switch");
let mode = "dark";
let buttons = document.getElementsByTagName("button");

// The elements with this class name are to be ignored when changing background colors
let ignoredElementsClassName = "ignore";

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

  let divs = Array.from(document.getElementsByTagName("div"));
  let sections = Array.from(document.getElementsByTagName("section"));

  divs.forEach(element => {
    element.style.backgroundColor = "white";
  });

  sections.forEach(element => {
    element.style.backgroundColor = "white";
  });

  let allElements = document.querySelectorAll('*');

  // Iterate over each element
  allElements.forEach(element => {
    if (!(element.classList.contains(ignoredElementsClassName)) && element.tagName !== "A") {
      element.style.color = "black";
    }
  });

  let imageBoxes = Array.from(document.getElementsByClassName("image"));

  imageBoxes.forEach(box => {
    box.className = "image light-mode-box";
  })

  // Only one button
  document.getElementById("mode-switch").className = "light-mode";
}

/**
 * Update the page to dark mode
 */
function darkMode() {
  button.innerHTML = "Switch to Light Mode";
  document.body.style.backgroundColor = "rgb(18, 18, 18)";

  let divs = Array.from(document.getElementsByTagName("div"));
  let sections = Array.from(document.getElementsByTagName("section"));

  divs.forEach(element => {
    element.style.backgroundColor = "rgb(18, 18, 18)";
  });

  sections.forEach(element => {
    element.style.backgroundColor = "rgb(18, 18, 18)";
  });

  let allElements = document.querySelectorAll('*');

  // Iterate over each element
  allElements.forEach(element => {
    if (!(element.classList.contains(ignoredElementsClassName)) && element.tagName !== "A") {
      element.style.color = "white";
    }
  });

  let imageBoxes = Array.from(document.getElementsByClassName("image"));

  imageBoxes.forEach(box => {
    box.className = "image";
  })

  // Only one button
  document.getElementById("mode-switch").className = "";
}
