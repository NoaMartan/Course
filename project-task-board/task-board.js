const newTaskForm = document.forms["new-task-form"];
let tasks = [];

function init() {
  const storageTasks = localStorage.getItem("tasks");
  if (storageTasks !== null) {
    tasks = JSON.parse(storageTasks);
  }
  displayTasks();
}
function submitNewTask() {
  const newTask = {
    content: newTaskForm.newTaskContent.value,
    endDate: newTaskForm.newTaskEndDate.value,
    endTime: newTaskForm.newTaskEndTime.value,
  };
  tasks.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  document.getElementById("tasks").innerHTML += displayTask(newTask);
  clearNewTaskForm();
}

function displayTask(task) {
  return `<li>
<article>${task.content}</article>
<div>${task.endDate}</div>
<div>${task.endTime}</div>
</li>
`;
}

function displayTasks() {
  for (let task of tasks) {
    document.getElementById("tasks").innerHTML += displayTask(task);
  }
}

function removeTask() {}

function clearNewTaskForm() {
  newTaskForm.reset();
}

init();
