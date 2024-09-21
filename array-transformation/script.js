let array = [];

let addition = document.getElementById("addition").addEventListener("submit", add);

function parseArray() {
  array = [];
  let text = document.getElementById("array").value;
  let element = "";
  for (let i = 0; i < text.length; i++) {
    if (Number.isNaN(text[i]) && text[i] !== ",") {
      alert("Type a valid array!");
      break;
    }
    if (text[i] === ",") {
      array.push(Number(element));
      element = "";
      continue;
    }
    element += text[i];
    if (i === text.length - 1) {
      array.push(Number(element));
    }
  }
  console.log(array);
}

function operate(operation) {
  switch (operation) {
    case "addition":
      break;
  }
}

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const square = (a) => a * a;
const sqrt = (a) => sqrt(a);
const compare = (a, b) => a > b;
const equal = (a, b) => a = b;
const divisible = (a, b) => a % b === 0;