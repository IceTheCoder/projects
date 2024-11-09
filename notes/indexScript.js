"use strict";

/* Adding note */
document.addEventListener('DOMContentLoaded', function(event) {
  const addButton = document.getElementById('add-button');
  
  addButton.addEventListener('click', function(event) {
    event.preventDefault();

    addNote();

    window.location.href = './note.html';

    function addNote() {
      Object.keys(localStorage).forEach((key) => {
        alert(localStorage.getItem(key));
      })
      alert("ADding note...");
    }
  });
})
  