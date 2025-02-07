const form = document.getElementById("form");
const input = document.getElementById("input");
const list = document.getElementById("list");
const toggleMode = document.getElementById("toggle-mode");

toggleMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("mode", "dark");
        toggleMode.textContent = "🌞";
    } else {
        localStorage.setItem("mode", "light");
        toggleMode.textContent = "🌙";
    }
});

if (localStorage.getItem("mode") === "dark") {
    document.body.classList.add("dark-mode");
    toggleMode.textContent = "🌞";
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const taskText = input.value.trim();
    if (taskText === "") return;

    const newLi = document.createElement("li");
    const userName = document.createElement("h2");
    const check = document.createElement("input");
    const deleteBtn = document.createElement("button");
    const editBtn = document.createElement("button");

    newLi.className = "item";

    userName.textContent = taskText;
    check.type = "checkbox";
    deleteBtn.textContent = "Delete";
    editBtn.textContent = "Edit";

    deleteBtn.classList.add("delete");
    editBtn.classList.add("edit");

    newLi.append(userName, check, deleteBtn, editBtn);
    list.append(newLi);

    input.value = "";

    deleteBtn.addEventListener("click", () => {
        newLi.remove();
    });

    editBtn.addEventListener("click", () => {
        const newText = prompt("Edit your task:", userName.textContent);
        if (newText !== null) {
            userName.textContent = newText;
        }
    });
});

