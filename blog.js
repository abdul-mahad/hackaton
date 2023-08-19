function addTask() {
    var taskNameInput = document.getElementById("taskName");
    var taskPriorityInput = document.getElementById("taskPriority");

    var taskName = taskNameInput.value;
    var taskPriority = taskPriorityInput.value;

    if (taskName.trim() === "" || taskPriority.trim() === "") {
      alert("Both task name and priority are required!");
      return;
    }

    var taskList = document.getElementById("taskList");
    var newTask = document.createElement("li");
    newTask.innerHTML = `
      <div class="task">${taskName}</div>
      <div class="priority">Priority: ${taskPriority}</div>
      <button class="deleteButton" onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(newTask);

    taskNameInput.value = "" ;
    taskPriorityInput.value = "";
  }

  function deleteTask(button) {
    var taskItem = button.parentNode;
    var taskList = taskItem.parentNode;
    taskList.removeChild(taskItem);
  }

  var para = document.getElementById("para");
  var del = document.getElementById("del");


  function delute(){
    para
  }