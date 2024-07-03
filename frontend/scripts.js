document.addEventListener('DOMContentLoaded', () => {
    fetchTasks();
  
    document.getElementById('taskForm').addEventListener('submit', (event) => {
      event.preventDefault();
      addTask();
    });
  });
  
  function fetchTasks() {
    fetch('http://localhost:3000/api/tasks')
      .then(response => response.json())
      .then(tasks => {
        const taskList = document.getElementById('taskList');
        taskList.innerHTML = '';
        tasks.forEach(task => {
          const li = document.createElement('li');
          li.textContent = task.title;
          taskList.appendChild(li);
        });
      })
      .catch(error => console.error('Error:', error));
  }
  
  function addTask() {
    const taskTitle = document.getElementById('taskTitle').value;
  
    fetch('http://localhost:3000/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: taskTitle, completed: false }),
    })
      .then(response => response.json())
      .then(task => {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        li.textContent = task.title;
        taskList.appendChild(li);
        document.getElementById('taskForm').reset();
      })
      .catch(error => console.error('Error:', error));
  }