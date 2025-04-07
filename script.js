const addTask = () => {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";


    const listItems = document.querySelectorAll("ul li");

    for (let i = 0; i < listItems.length; i++) {
        listItems[i].classList.add(`li${i}`);
    }


    const btn = document.createElement("button");
    btn.textContent = "x";
    btn.classList.add("del");
    li.appendChild(btn);

    btn.onclick = function () {
        li.remove();
    };





    const check = document.createElement('input');
    check.type = 'checkbox';
    check.id = 'myCheckbox'
    check.classList.add('check');
    li.appendChild(check);





    const checkboxes = document.querySelectorAll(".check");

    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", function () {
            const list = this.closest("li");
            if (this.checked) {
                list.classList.add("bg-green");
            } else {
                list.classList.remove("bg-green");
            }
        });
    });
}































