// Check if we are on the open page
if (document.getElementById('notebook')) {
  // Add custom cursor for the notebook element on the open page
  document.body.style.cursor = 'url("path/to/key-cursor.png"), auto';
} else if (document.getElementById('taskForm')) {
  // Set the default cursor for the second page
  document.body.style.cursor = 'default';

  // Function to change cursor to a pencil on list item hover
  function changeCursorToPen() {
    const listItems = document.getElementById('taskList').getElementsByTagName('li');

    for (const listItem of listItems) {
      listItem.addEventListener('mouseover', function () {
        listItem.style.cursor = 'url("path/to/pen-cursor.png"), auto';
      });

      listItem.addEventListener('mouseout', function () {
        listItem.style.cursor = 'default';
      });
    }
  }

  // Call the function to apply the pencil cursor to list items
  changeCursorToPen();
}
