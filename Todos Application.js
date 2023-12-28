let todoItemsContainer = document.getElementById("todoItemsContainer");

let todoList = [{
        text: "Learn HTML"
    },
    {
        text: "Learn CSS"
    },
    {
        text: "Learn JavaScript"
    }
];

function addTodo(todo) {
    let todoItemElement = document.createElement("li");
    todoItemElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoItemsContainer.appendChild(todoItemElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = "myCheckBox";
    inputElement.classList.add("checkbox-input");
    todoItemElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoItemElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", "myCheckBox");
    labelElement.classList.add("label-container");
    labelContainer.appendChild(labelElement);

    let deleteContainer = document.createElement("div");
    deleteContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteContainer.appendChild(deleteIcon);
}

for (let todo of todoList) {
    addTodo(todo);
}