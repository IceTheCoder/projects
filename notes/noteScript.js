"use strict";

/* Save notes as they are written */
document.addEventListener('input', function(event) {
  const title = document.getElementById("note-title").innerHTML;
  const content = document.getElementById("note-content").innerHTML;

  const entry = { title, content };

  localStorage.setItem(localStorage.getItem("loadedNote").toString(), JSON.stringify(entry));
  console.log("Saving note...");
});

/* Open notes correctly */
document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("note-title").innerHTML = JSON.parse(localStorage.getItem(localStorage.getItem("loadedNote"))).title.replace(/<br\s*\/?>$/i, '');
  document.getElementById("note-content").innerHTML = JSON.parse(localStorage.getItem(localStorage.getItem("loadedNote"))).content;
});
