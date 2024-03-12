console.log("Custom cursor script is running.");

// Check if we are on the open page
if (document.getElementById('notebook')) {
  console.log("On the open page");
  // Add class to apply custom cursor styles
  document.body.classList.add('on-open-page');
} else if (document.getElementById('taskForm')) {
  console.log("On the second page");
  // Remove class to revert to default cursor styles
  document.body.classList.remove('on-open-page');

  // Add custom cursor class to list items
  const listItems = document.getElementById('taskList').getElementsByTagName('li');
  for (const listItem of listItems) {
    listItem.classList.add('custom-cursor-pen');
  }
}

