"use strict";

/* Adding note */
document.addEventListener('DOMContentLoaded', function(event) {
  const addButton = document.getElementById('add-button');
  
  addButton.addEventListener('click', function(event) {
    event.preventDefault();

    addNote();

    window.location.href = './note.html';

    function addNote() {
      let numbers = [];

      Object.keys(localStorage).forEach((key) => {
        let parsedKey = parseInt(key, 10);

        if (!isNaN(parsedKey)) {
          numbers.push(parsedKey);
        }
      });

      alert(numbers);

      let maxValue = Math.max(...numbers);

      let loadedNote = Math.max(maxValue + 1, 0)

      localStorage.setItem("loadedNote", loadedNote);
    }
  });
})
  