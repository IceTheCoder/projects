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
  console.log(array);
}