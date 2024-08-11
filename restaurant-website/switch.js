// https://www.shecodes.io/athena/41313-how-to-apply-a-function-to-a-specific-button-in-javascript
// Wrapped in a function so it's only called once by index.html
function mapButton() {
  // Dark/Light Mode Switch
  console.log("Mapping button");

  let mode = "";

  const button = document.getElementById("mode-switch");
  if (localStorage.getItem("mode")) {
    mode = localStorage.getItem("mode");
  } else {
    mode = "dark";
  }

  button.addEventListener("click", function() {
    if (mode === "dark") {
      mode = "light";
      lightMode();
    } else if (mode === "light") {
      mode = "dark";
      darkMode();
    }
    // https://stackoverflow.com/questions/39838058/how-to-avoid-javascript-variable-being-reset-at-page-refresh
    localStorage.setItem("mode", mode)
    console.log(mode);
  });  
}

// The elements with this class name are to be ignored when changing background colors
let ignoredElementsClassName = "ignore";

/**
 * Update the page to light mode
 */
function lightMode() {
  const button = document.getElementById("mode-switch");
  let buttons = document.getElementsByTagName("button");

  if (button) {
    button.innerHTML = "Switch to Dark Mode";
  }
  document.body.style.backgroundColor = "rgb(255, 255, 255)";

  function setBackgroundColor(element, r, g, b) {
    // Set the background color for the current element if it's a div
    if ((element.tagName.toLowerCase() === 'section' || 
    element.tagName.toLowerCase() === 'header' || element.tagName.toLowerCase() === 'footer' || 
    element.tagName.toLowerCase() === 'input'  || element.tagName.toLowerCase() === 'textarea' ||
    element.tagName.toLowerCase() === 'form')
    && !(element.classList.contains(ignoredElementsClassName))) {
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

  let allElements = document.querySelectorAll('*');

  // Iterate over each element
  allElements.forEach(element => {
    if (!(element.classList.contains(ignoredElementsClassName))) {
      element.style.color = "black";
    }
  });

  // Start the recursive background color setting from the body element
  setBackgroundColor(document.body, 225, 225, 225);

  // CODE SPECIFIC TO THIS PROJECT START
  let footers = Array.from(document.getElementsByTagName('footer'));

  footers.forEach(footer => {
    footer.style.backgroundColor = "white";
  })
  // END  

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.color = "black";
    buttons[i].className = "light-mode";
  }

  if (document.getElementById("iframe")) {
    document.getElementById('iframe').contentWindow.location.reload();
  }
}

/**
 * Update the page to dark mode
 */
function darkMode() {
  const button = document.getElementById("mode-switch");
  let buttons = document.getElementsByTagName("button");

  if (button) {
    button.innerHTML = "Switch to Light Mode";
  }
  document.body.style.backgroundColor = "rgb(18, 18, 18)";

  function setBackgroundColor(element, r, g, b) {
    // Set the background color for the current element if it's a div
    if ((element.tagName.toLowerCase() === 'section' || 
    element.tagName.toLowerCase() === 'header' || element.tagName.toLowerCase() === 'footer' || 
    element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea' ||
    element.tagName.toLowerCase() === 'form')
    && !(element.classList.contains(ignoredElementsClassName))) {
      element.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

      // Calculate the new RGB values for the child elements
      let newR = Math.max(r + 16, 0);
      let newG = Math.max(g + 16, 0);
      let newB = Math.max(b + 16, 0);

      // Iterate through each child element and set its background color
      Array.from(element.children).forEach(child => {
        setBackgroundColor(child, newR, newG, newB);
      });
    } else {
      // If the element is not a section, still traverse its children
      Array.from(element.children).forEach(child => {
        setBackgroundColor(child, r, g, b);
      });
    }
  }

  let allElements = document.querySelectorAll('*');

  // Iterate over each element
  allElements.forEach(element => {
    // Change the text color
    if (!(element.classList.contains(ignoredElementsClassName))) {
      element.style.color = "white";
    }
  });

  setBackgroundColor(document.body, 34, 34, 34);

  // CODE SPECIFIC TO THIS PROJECT START
  let footers = Array.from(document.getElementsByTagName('footer'));

  footers.forEach(footer => {
    footer.style.backgroundColor = "rgb(18, 18, 18)";
  })
  // END  

  // Change each button's class to none (i.e. the default, dark mode)
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.color = "white";
    buttons[i].className = "";
  }

  document.getElementById('iframe').contentWindow.location.reload();
}

function checkMode() {
  if (localStorage.getItem("mode") === "light") {
    lightMode();  // Make sure this function is defined
  }
  // Dark mode is the default.
}

function mainPageLoad() {
  mapButton();
  checkMode();
}
