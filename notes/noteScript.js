"use strict";

/* Save notes as they are written */
document.addEventListener('input', function(event) {
  const title = document.getElementById("note-title").innerHTML;
  const content = document.getElementById("note-content").innerHTML;

  const entry = { title, content };

  localStorage.setItem(localStorage.getItem("loadedNote"), JSON.stringify(entry));
  console.log("Saving note...");
});

alert(localStorage.getItem("loadedNote"));

