   document.addEventListener("DOMContentLoaded", function () {
   
   const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

  function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      // Create li element
      const li = document.createElement("li");
      li.textContent = taskText;

      // Create Remove button
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.className = "remove-btn";

      // When clicked, remove the li element
      removeBtn.onclick = function () {
        taskList.removeChild(li);
      };

      // Append button to li, and li to list
      li.appendChild(removeBtn);
      taskList.appendChild(li);

      // Clear the input
      taskInput.value = "";
    }
  }


    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", function(event){
        if(event.key === "Enter"){
            addTask();
        }        
    });
})
document.addEventListener("click", addTask);