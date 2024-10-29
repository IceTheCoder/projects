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
  let sum = 0;

  switch (formId) {
    // EACH ITEM
    case "addition":
      for (i = 0; i < array.length; i++) {
        array[i] = add(array[i], Number(document.getElementById("add").value));
      }    
      break;
    case "subtraction":
      for (i = 0; i < array.length; i++) {
        array[i] = subtract(array[i], Number(document.getElementById("subtract").value));
      }    
      break;
    case "multiplication":
      for (i = 0; i < array.length; i++) {
        array[i] = multiply(array[i], Number(document.getElementById("multiply").value));
      }    
      break;
    case "division":
      for (i = 0; i < array.length; i++) {
        array[i] = divide(array[i], Number(document.getElementById("divide").value));
      }    
      break;
    case "square-of":
      for (i = 0; i < array.length; i++) {
        array[i] = square(array[i]);
      }    
      break;
    case "square-root":
      for (i = 0; i < array.length; i++) {
        array[i] = sqrt(array[i]);
      }    
      break;
    case "integer":
      for (i = 0; i < array.length; i++) {
        array[i] = parseInt(array[i]);
      }
    // FILTER
    case "greater-than":
      for (i = 0; i < array.length; i++) {
        if (array[i] <= Number(document.getElementById("greater").value)) {
          array.splice(i, 1);
          i--; // Make sure we don't skip over anything.
        }
      }
      break;
    case "smaller-than":
      for (i = 0; i < array.length; i++) {
        if (array[i] >= Number(document.getElementById("smaller").value)) {
          array.splice(i, 1);
          i--;
        }
      }
      break;
    case "divisible-by":
      for (i = 0; i < array.length; i++) {
        if (array[i] % Number(document.getElementById("divisible").value) !== 0) {
          array.splice(i, 1);
          i--;
        }
      }
      break;
    // ALL ITEMS
    case "average-of":
      for (i = 0; i < array.length; i++) {
        sum += array[i];
      }
      let average = sum / array.length;
      document.getElementById("average-result").value = average;
      break;
    case "sum-of":
      for (i = 0; i < array.length; i++) {
        sum += array[i];
      }
      document.getElementById("sum-result").value = sum;
      break;
    case "product-of":
      product = 1;
      for (i = 0; i < array.length; i++) {
        product *= array[i];
      }
      document.getElementById("product-result").value = product;
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
const sqrt = (a) => Math.sqrt(a);
const compare = (a, b) => a > b;
const equal = (a, b) => a = b;
const divisible = (a, b) => a % b === 0;