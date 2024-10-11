function addTask() {
    var input = document.getElementById("taskInput").value;
    if (input === '') {
      alert("Please enter a task!");
      return;
    }
    
    var taskContainer = document.getElementById("taskContainer");
    var taskCard = document.createElement("div");
    taskCard.textContent = input;
    taskCard.className = "task-card";
    taskCard.onclick = toggleCompleted;
    
    var taskActions = document.createElement("div");
    taskActions.className = "task-actions";
    
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteButton.onclick = deleteTask;
    
    var editButton = document.createElement("button");
    editButton.innerHTML = '<i class="fas fa-edit"></i>';
    editButton.onclick = editTask;
    
    taskActions.appendChild(editButton);
    taskActions.appendChild(deleteButton);
    taskCard.appendChild(taskActions);
    
    taskContainer.appendChild(taskCard);
    document.getElementById("taskInput").value = '';
  }
  
  function toggleCompleted() {
    this.classList.toggle("completed");
  }
  
  function deleteTask(event) {
    event.stopPropagation();
    this.parentNode.parentNode.remove();
  }
  
  function editTask(event) {
    event.stopPropagation();
    var taskText = this.parentNode.parentNode.firstChild;
    var newText = prompt("Edit Task:", taskText.textContent);
    if (newText !== null) {
      taskText.textContent = newText;
    }
  }
  
  function highlightToday() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    var dateString = yyyy + '-' + mm + '-' + dd;
  
    var taskCards = document.getElementsByClassName("task-card");
    for (var i = 0; i < taskCards.length; i++) {
      if (taskCards[i].textContent.includes(dateString)) {
        taskCards[i].classList.add("highlight");
      }
    }
  }
  
  
  var sampleTasks = [
    "Complete project proposal",
    "Attend webinar on new technologies",
    "Call client for follow-up",
    "Send progress update email",
    "Research market trends",
    "Update project documentation",
    "Organize office supplies",
    "Review employee performance evaluations"
  ];
  
  document.addEventListener("DOMContentLoaded", function() {
    sampleTasks.forEach(function(task) {
      var taskContainer = document.getElementById("taskContainer");
      var taskCard = document.createElement("div");
      taskCard.textContent = task;
      taskCard.className = "task-card";
      taskCard.onclick = toggleCompleted;
      
      var taskActions = document.createElement("div");
      taskActions.className = "task-actions";
      
      var deleteButton = document.createElement("button");
      deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
      deleteButton.onclick = deleteTask;
      
      var editButton = document.createElement("button");
      editButton.innerHTML = '<i class="fas fa-edit"></i>';
      editButton.onclick = editTask;
      
      taskActions.appendChild(editButton);
      taskActions.appendChild(deleteButton);
      taskCard.appendChild(taskActions);
      
      taskContainer.appendChild(taskCard);
    });
  
    highlightToday();
  });
  