
function flipNotebook() {
  const notebook = document.querySelector('.notebook-inner');
  notebook.style.transform = 'rotateY(180deg)'; // Flip the notebook

  // Wait for 1 second to show the back cover, then redirect
  setTimeout(() => {
    window.location.href = 'todolist.html'; // Adjust the URL as needed
  }, 350); // Adjust delay as needed
}


