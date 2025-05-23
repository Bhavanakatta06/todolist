document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();

    if (!taskText) {
        alert('Please enter a task');
        return;
    }

    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const removeBtn = document.createElement('button');
    const taskTextSpan = document.createElement('span');

    checkbox.type = 'checkbox';
    checkbox.onclick = function() {
        taskTextSpan.classList.toggle('completed');
        saveTasks();
    };

    taskTextSpan.className = 'taskSpan';
    taskTextSpan.textContent = taskText;

    removeBtn.className = 'rBtn';
    removeBtn.textContent = 'remove';
    removeBtn.onclick = function() {
        taskList.removeChild(li);
        saveTasks();
    };

    li.appendChild(checkbox);
    li.appendChild(taskTextSpan);
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    saveTasks();
    taskInput.value = '';
}

function saveTasks() {
    const tasks = Array.from(document.querySelectorAll("#taskList li")).map(li => ({
        text: li.querySelector(".taskSpan")?.textContent || "Untitled Task",
        completed: li.querySelector(".taskSpan").classList.contains("completed")
    }));
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const taskList = document.getElementById("taskList");
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    taskList.innerHTML = "";
    tasks.forEach(task => {
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        const removeBtn = document.createElement("button");
        const taskTextSpan = document.createElement("span");

        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.onclick = function() {
            taskTextSpan.classList.toggle("completed");
            saveTasks();
        };

        taskTextSpan.className = "taskSpan";
        taskTextSpan.textContent = task.text;

        if (task.completed) taskTextSpan.classList.add("completed");

        removeBtn.className = "rBtn";
        removeBtn.textContent = "remove";
        removeBtn.onclick = function() {
            taskList.removeChild(li);
            saveTasks();
        };

        li.appendChild(checkbox);
        li.appendChild(taskTextSpan);
        li.appendChild(removeBtn);
        taskList.appendChild(li);
    });
}
