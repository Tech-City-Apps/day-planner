let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

function refreshTaskListDisplay() {
  const taskListElement = document.getElementById('taskList');
  taskListElement.innerHTML = ''; // Clear existing tasks display

  todoList.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.textContent = `${task.title} - Due: ${task.dueDate}`;
    // Apply strikethrough if the task is marked as completed
    if (task.status === 'Completed') {
      taskItem.style.textDecoration = 'line-through';
    }
    taskItem.onclick = function() {
      // Toggle task completion status and apply/remove strikethrough
      todoList[index].status = todoList[index].status === 'Completed' ? 'Pending' : 'Completed';
      saveTasksToLocalStorage();
      refreshTaskListDisplay();
    };
    taskListElement.appendChild(taskItem);
  });
}

function addItemToTodoList(title, description, dueDate) {
  let task = { title, description, dueDate, status: 'Pending' };
  todoList.push(task);
  saveTasksToLocalStorage();
  refreshTaskListDisplay();
}

function saveTasksToLocalStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

function clearTodoList() {
  todoList = [];
  localStorage.removeItem('todoList');
  refreshTaskListDisplay();
}

function undoLastEntry() {
  if (todoList.length > 0) {
    todoList.pop(); // Remove the last task from the list
    saveTasksToLocalStorage();
    refreshTaskListDisplay();
  }
}

document.getElementById('taskForm').addEventListener('submit', function(e) {
  e.preventDefault();
  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;
  let dueDate = document.getElementById('dueDate').value;
  addItemToTodoList(title, description, dueDate);
  // Clear form fields
  document.getElementById('title').value = '';
  document.getElementById('description').value = '';
  document.getElementById('dueDate').value = '';
});

document.getElementById('clearListButton').addEventListener('click', clearTodoList);
document.getElementById('undoLastEntryButton').addEventListener('click', undoLastEntry);
document.addEventListener('DOMContentLoaded', refreshTaskListDisplay);


