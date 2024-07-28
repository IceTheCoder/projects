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

  function setBackgroundColor(element, r, g, b) {
    // Set the background color for the current element if it's a div
    if (element.tagName.toLowerCase() === 'section') {
      element.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

      // Calculate the new RGB values for the child elements
      let newR = Math.max(r - 30, 0);
      let newG = Math.max(g - 30, 0);
      let newB = Math.max(b - 30, 0);

      // Iterate through each child element and set its background color
      Array.from(element.children).forEach(child => {
        setBackgroundColor(child, newR, newG, newB);
      });
    } else {
      // If the element is not a div, still traverse its children
      Array.from(element.children).forEach(child => {
        setBackgroundColor(child, r, g, b);
      });
    }
  }

  // Start the recursive background color setting from the body element
  setBackgroundColor(document.body, 225, 225, 225);
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
