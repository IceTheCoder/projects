function parseArray() {
  let array = [];
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
  return array;
}

function handleSubmit(event, formId) {
  event.preventDefault();

  let array = parseArray();


  switch (formId) {
    case "addition":
      for (i = 0; i < array.length; i++) {
        array[i] += Number(document.getElementById("add").value);
      }    
      break;
    case "subtraction":
      for (i = 0; i < array.length; i++) {
        array[i] -= Number(document.getElementById("subtract").value);
      }    
      break;
    case "multiplication":
      for (i = 0; i < array.length; i++) {
        array[i] *= Number(document.getElementById("multiply").value);
      }    
      break;
    case "division":
      for (i = 0; i < array.length; i++) {
        array[i] /= Number(document.getElementById("divide").value);
      }    
      break;
  }

  // Update array
  let text = ""

  for (i = 0; i < array.length; i++) {
    if (i !== 0) {
      text += `, ${array[i]}`;
    } else {
      text += `${array[i]}`;
    }
  }

  document.getElementById("array").value = text;
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