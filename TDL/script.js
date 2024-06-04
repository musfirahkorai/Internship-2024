function addTask() {
                                                  
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
    var taskText = taskInput.value;

    if (taskText.trim() !== '') {
        var taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        taskItem.addEventListener('click', function () {
            this.classList.toggle('completed');
        });

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            taskList.removeChild(taskItem);
        });

        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);

        taskInput.value = '';
    }
}
