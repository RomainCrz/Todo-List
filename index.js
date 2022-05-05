const input = document.getElementById("text");
const list = document.querySelector("#list");

//Storage

function storage() {
    window.localStorage.todoList = list.innerHTML;
}

function getTodos() {
    if (window.localStorage.todoList) {
        list.innerHTML = window.localStorage.todoList;
    } else {
        list.innerHTML = `<li class="new_task">Cliquez sur un todo pour le supprimer</li>`;
    }
}

getTodos();
//

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let task;
    task = input.value;
    list.innerHTML += `<li class="new_task">${task}</li>`;
    storage();
    input.value = "";
});

list.addEventListener("click", (e) => {
    console.log(e.target.className);
    if (e.target.className === "new_task") {
        e.target.classList.add("done");
        e.target.classList.remove("new_task");
    } else if (e.target.className === "done") {
        e.target.remove();
    }
    storage();
});
