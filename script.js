function addTask(){
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const removeBtn = document.createElement('button');
    const taskText = document.createTextNode(taskInput.value);
    const taskTextSpan = document.createElement('span');
    if(taskInput.value == ' '){
        alert('Please enter a task');
        return;
    }
    checkbox.type = 'checkbox';
    checkbox.onclick = function(){
        taskTextSpan.classList.toggle('completed');
    };
    taskTextSpan.className = 'taskSpan';
    taskTextSpan.textContent = taskInput.value;
    removeBtn.className = 'rBtn';
    removeBtn.textContent = 'remove';
    removeBtn.onclick = function(){
        taskList.removeChild(li);
    };
    li.appendChild(checkbox);
    li.appendChild(taskTextSpan);
    li.appendChild(removeBtn);
    taskList.appendChild(li);
    taskInput.value = ' ';
}