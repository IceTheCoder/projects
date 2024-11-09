document.addEventListener('keydown', function(event) {
  localStorage.setItem(document.getElementById('note-title').innerHTML, document.getElementById('note-content').innerHTML);
});

document.getElementById('note-content').innerHTML = localStorage.getItem(document.getElementById('note-title').innerHTML);


