"use strict";

/* Save notes as they are written */
document.addEventListener('keydown', function(event) {
  const title = document.getElementById("note-title").innerHTML;
  const content = document.getElementById("note-content").innerHTML;

  localStorage.setItem(localStorage.getItem("loadedNote"), title);
  console.log("Saving note...");
});

alert(localStorage.getItem("loadedNote"));

