    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    function addTask(){
        const taskText = taskInput.value.trim();
        if(taskText === "") alert("Please enter a task.");

        if(taskText !== ""){
            const listItem = document.createElement("li");
            listItem.textContent = taskText;
            const button = document.createElement("button");
            button.textContent = "Remove";
            button.className = 'remove-btn';
           button.onclick(function(){
                taskList.removeChild(listItem);
           });
           listItem.appendChild(button);
           taskList.appendChild(listItem);
           taskInput.value = "";
        }
    }

    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", function(event){
        if(event.key === "Enter"){
            addTask();
        }        
    });

document.addEventListener("click", addTask);