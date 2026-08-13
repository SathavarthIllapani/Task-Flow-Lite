export function renderTaskList(container, tasks) {
  container.innerHTML = tasks
    .map(
      (task) => `
    <li class="task ${task.completed ? "completed" : ""}" data-id="${task.id}">
      <div class="task-content">
        <input type="checkbox" ${task.completed ? "checked" : ""} />
        <span>${task.text}</span>
      </div>
      <button class="delete-btn">DEL</button>
    </li>
  `
    )
    .join("");
}