import { loadTasks, saveTasks } from "./modules/storage.js";
import { renderTaskList } from "./modules/render.js";
import { validateTaskInput } from "./modules/validation.js";

let tasks = loadTasks();

const taskListEl = document.getElementById("task-list");
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");

function createTask(text) {
  return {
    id: Date.now(),
    text: text.trim(),
    completed: false,
  };
}

// Initial render
renderTaskList(taskListEl, tasks);

// Handle form submit
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateTaskInput(taskInput.value)) {
    tasks.push(createTask(taskInput.value));
    saveTasks(tasks);
    renderTaskList(taskListEl, tasks);
    taskInput.value = "";
  }
});

// Handle task actions
taskListEl.addEventListener("click", (e) => {
  const li = e.target.closest(".task");
  if (!li) return;

  const id = Number(li.dataset.id);
  const index = tasks.findIndex((t) => t.id === id);

  if (e.target.type === "checkbox") {
    tasks[index].completed = e.target.checked;
    saveTasks(tasks);
    li.classList.toggle("completed", e.target.checked);
  }

  if (e.target.classList.contains("delete-btn")) {
    tasks.splice(index, 1);
    saveTasks(tasks);
    renderTaskList(taskListEl, tasks);
  }
});