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
