let id = 0;

function addTask(e, columnId) {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
        const task = document.createElement("div");
        task.className = "task";
        task.draggable = true;
        task.id = "task" + id++;
        task.innerText = e.target.value;

        task.ondragstart = drag;

        document.getElementById(columnId).appendChild(task);
        e.target.value = "";
    }
}

function allowDrop(e) {
    e.preventDefault();
}

function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
}

function drop(e) {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(taskId));
}