// DOM Elements
const toDoInput = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add-button");
const toDoList = document.querySelector("#todo-list");

let todos = [];
updateToDoListUI();

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  addToDo();
});

// Add ToDo
function addToDo() {
  const todoText = toDoInput.value.trim();
  if (todoText.length === 0) {
    alert("Todo cannot be empty");
    return;
  }

  // Push to array
  todos.push(todoText);
  updateToDoListUI();
  toDoInput.value = "";
}

function updateToDoListUI() {
  toDoList.innerHTML = "";

  todos.forEach((todo, todoIndex) => {
    toDoItem = createToDoItem(todo, todoIndex);
    toDoList.append(toDoItem);
  });
}

// Create ToDo
function createToDoItem(todoText, todoIndex) {
  const li = document.createElement("li");
  li.classList.add("todo");
  // 🔑 store index here
  li.dataset.index = todoIndex;
  li.innerHTML = `
         <input type="checkbox" id="todo-${todoIndex}"/>
          <!-- the custom checkbox for our input -->
          <label for="todo-${todoIndex}" class="custom-checkbox">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
            </svg>
          </label>
          <!-- text works also like a checkbox for our input -->
          <label for="todo-${todoIndex}" class="todo-text">${todoText}</label>
          <button class="delete-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path
                d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"
              />
            </svg>
          </button>
  `;
  return li;
}
