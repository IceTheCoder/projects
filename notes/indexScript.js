"use strict";

/* Adding note */
document.addEventListener('DOMContentLoaded', function(event) {
  function adding() {
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
    
        let maxValue = Math.max(...numbers);
  
        let loadedNote = Math.max(maxValue + 1, 0)

        localStorage.setItem("loadedNote", loadedNote);
      }
    });
  }

  function showing() {
    Object.keys(localStorage).forEach((key) => {
      let parsedKey = parseInt(key, 10);

      function addNote(i) {
        // Create the main div
        const noteDiv = document.createElement("div");
        noteDiv.className = "note-preview show";
        
        // Create the link element for the note title
        const noteLink = document.createElement("a");
        noteLink.href = "./note.html"; // Don't put a href; linking is dealt with within JS
        noteLink.className = "note-title";
        noteLink.id = i;
        noteLink.textContent = JSON.parse(localStorage.getItem(i)).title.replace(/<br\s*\/?>$/i, ''); // Set the text for the note title
        
        // Create the button for the delete option
        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.onclick = openPopup;
        
        // Create the image for the delete icon
        const deleteIcon = document.createElement("img");
        deleteIcon.src = "./icons/delete.png";
        deleteIcon.alt = "Delete Icon";
        deleteIcon.className = "icon";
        deleteIcon.id = "delete-icon";
        
        // Append the delete icon to the delete button
        deleteButton.appendChild(deleteIcon);
        
        // Append the link and delete button to the main div
        noteDiv.appendChild(noteLink);
        noteDiv.appendChild(deleteButton);
        
        // Append the note-preview div to the container in the HTML
        const notesContainer = document.getElementById("notes-list");
        notesContainer.appendChild(noteDiv);
      }

      if (!isNaN(parsedKey)) {
        addNote(parsedKey);
      }
    });
  }

  function loading() {
    const anchors = document.querySelectorAll("a");

    anchors.forEach((anchor) => {
      if (!isNaN(parseInt(anchor.id, 10))) {
        anchor.addEventListener('click', function(event) {
          event.preventDefault();
  
          const noteId = event.target.id;
  
          localStorage.setItem("loadedNote", noteId);
  
          window.location.href = "./note.html";
        });
      }
    });
  }


  adding();
  showing();
  loading();

  const searchForm = document.getElementById("search-input");

  function searching() {
    const text = document.getElementById("search-input").value;

    for (const key in localStorage) {
      if (!isNaN(key)) {
        const title = JSON.parse(localStorage.getItem(key)).title.replace(/<br\s*\/?>$/i, '');
        const content = JSON.parse(localStorage.getItem(key)).content.replace(/<br\s*\/?>$/i, '');
        if (title.search(text) === -1 && content.search(text) === -1) {
          document.getElementById(key).classList.remove("show");
          document.getElementById(key).classList.add("hide");
        } else {
          document.getElementById(key).classList.remove("hide");
          document.getElementById(key).classList.add("show");
        }
      }
    }
  }

  searchForm.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
    searching();
  });
});

let popup = document.getElementById("popup");

function openPopup(event) {
  // Get the button that was clicked
  const button = event.currentTarget;

  // Nearest div parent
  const notePreviewDiv = button.closest('.note-preview');

  // Anchor element inside that div parent
  const anchor = notePreviewDiv.querySelector('.note-title');

  const anchorId = anchor.id;

  localStorage.setItem("anchorId", anchorId);

  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
}

function deleteSelectedNote() {
  const noteId = localStorage.getItem("anchorId");
  localStorage.removeItem(noteId);
  closePopup();
  location.reload();
}
