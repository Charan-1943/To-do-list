function addTask() {
    let input = document.getElementById("taskInput");
    let text = input.value.trim();
    if (text === "") return;

    let li = document.createElement("li");

    // checkmark (hidden initially)
    let check = document.createElement("span");
    check.className = "checkmark";
    check.textContent = "✔";

    // task text
    let taskText = document.createElement("span");
    taskText.className = "text";
    taskText.textContent = text;

    // delete button
    let del = document.createElement("span");
    del.className = "delete-btn";
    del.textContent = "🗑";

    // toggle completion
    li.onclick = function (e) {
        if (e.target === del) return; // prevent delete click from toggling

        li.classList.toggle("done");

        if (li.classList.contains("done")) {
            document.getElementById("ding").play();
        }
    };

    // delete
    del.onclick = function () {
        li.remove();
    };

    li.appendChild(check);
    li.appendChild(taskText);
    li.appendChild(del);

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}
