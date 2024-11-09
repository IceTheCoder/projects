/* Adding note */
document.addEventListener('DOMContentLoaded', function(event) {
  const addButton = document.getElementById('add-button');
  
  addButton.addEventListener('click', function(event) {
    event.preventDefault();

    alert("ADding note...");

    window.location.href = './note.html';
  });
})
  