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
                                                          updateLocalStorage(); // Update local storage after deleting task
                                                      });
                                              
                                                      var updateButton = document.createElement('button');
                                                      updateButton.textContent = 'Update';
                                                      updateButton.addEventListener('click', function () {
                                                          var updatedTaskText = prompt('Enter updated task:');
                                                          if (updatedTaskText !== null) {
                                                              taskItem.textContent = updatedTaskText;
                                                              updateLocalStorage(); // Update local storage after updating task
                                                          }
                                                      });
                                              
                                                      taskItem.appendChild(deleteButton);
                                                      taskItem.appendChild(updateButton);
                                                      taskList.appendChild(taskItem);
                                              
                                                      updateLocalStorage(); // Update local storage after adding task
                                              
                                                      taskInput.value = '';
                                                  }
                                              }
                                              
                                              function updateLocalStorage() {
                                                  var tasks = [];
                                                  var taskList = document.getElementById('taskList').getElementsByTagName('li');
                                                  for (var i = 0; i < taskList.length; i++) {
                                                      tasks.push(taskList[i].textContent);
                                                  }
                                                  localStorage.setItem('tasks', JSON.stringify(tasks));
                                              }
                                              
                                              // Load tasks from local storage when the page loads
                                              window.onload = function () {
                                                  var savedTasks = JSON.parse(localStorage.getItem('tasks'));
                                                  if (savedTasks) {
                                                      var taskList = document.getElementById('taskList');
                                                      savedTasks.forEach(function (taskText) {
                                                          var taskItem = document.createElement('li');
                                                          taskItem.textContent = taskText;
                                                          taskItem.addEventListener('click', function () {
                                                              this.classList.toggle('completed');
                                                              updateLocalStorage(); // Update local storage after toggling completion status
                                                          });
                                              
                                                          var deleteButton = document.createElement('button');
                                                          deleteButton.textContent = 'Delete';
                                                          deleteButton.addEventListener('click', function () {
                                                              taskList.removeChild(taskItem);
                                                              updateLocalStorage(); // Update local storage after deleting task
                                                          });
                                              
                                                          var updateButton = document.createElement('button');
                                                          updateButton.textContent = 'Update';
                                                          updateButton.addEventListener('click', function () {
                                                              var updatedTaskText = prompt('Enter updated task:');
                                                              if (updatedTaskText !== null) {
                                                                  taskItem.textContent = updatedTaskText;
                                                                  updateLocalStorage(); // Update local storage after updating task
                                                              }
                                                          });
                                              
                                                          taskItem.appendChild(deleteButton);
                                                          taskItem.appendChild(updateButton);
                                                          taskList.appendChild(taskItem);
                                                      });
                                                  }
                                              };
                                              