document.addEventListener(DOMContentLoaded, function () {
  // selecting dom elments
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // in-memory tasks array (each task is { id: string, text: string })
  let tasks = [];

  // Save tasks array to localStorage
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Load tasks from localStorage and render them to the DOM
  function loadTasks() {
    const saved = localStorage.getItem("tasks");
    if (!saved) return;

    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        tasks = parsed;
        tasks.forEach((t) => {
          const li = createTaskElement(t);
          taskList.appendChild(li);
        });
      } else {
        // If stored data is corrupt/not an array, reset it
        tasks = [];
        saveTasks();
      }
    } catch (err) {
      console.error("Failed to parse tasks from localStorage:", err);
      tasks = [];
      saveTasks();
    }
  }
  // creating addTask function
  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") alert("Please enter a task");

    if (taskText !== "") {
      // Create li element
      const li = document.createElement("li");
      li.textContent = taskText;
      // Create Remove button
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.classList.add("remove-btn");
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
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  document.addEventListener("DOMContentLoaded", addTask);
});

