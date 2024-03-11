// Start with an empty array or load existing tasks from local storage
let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

// Function to display tasks
function refreshTaskListDisplay() {
  const taskListElement = document.getElementById('taskList');
  taskListElement.innerHTML = ''; // Clear existing tasks
          
  // Iterate through tasks and create list items
  todoList.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.textContent = `${task.title} - On: ${task.dueDate} - ${task.description}`;
    taskItem.style.textDecoration = task.status === 'Completed' ? 'line-through' : 'none';
              
    // Add click event to mark task as completed/incomplete
    taskItem.onclick = function() {
      todoList[index].status = todoList[index].status === 'Completed' ? 'Pending' : 'Completed';
      saveTasksToLocalStorage();
      refreshTaskListDisplay();
    };

    taskListElement.appendChild(taskItem);
  });
}

// Function to add a task
function addItemToTodoList(title, description, dueDate) {
  const task = {
    title,
    description,
    dueDate,
    status: 'Pending',
  };
  todoList.push(task);
  saveTasksToLocalStorage();
  refreshTaskListDisplay(); // Refresh the list display
}

// Function to save the current state of todoList to local storage
function saveTasksToLocalStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

// Set up event listener for the form submission
document.getElementById('taskForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the default form submission

  // Get values from form inputs
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const dueDate = document.getElementById('dueDate').value;

  // Add the new task
  addItemToTodoList(title, description, dueDate);

  // Clear the form fields after submission
  document.getElementById('title').value = '';
  document.getElementById('description').value = '';
  document.getElementById('dueDate').value = '';
});

// Load and display tasks when the document is fully loaded
document.addEventListener('DOMContentLoaded', refreshTaskListDisplay);
