const input = document.querySelector('.tasks__input');
const list = document.querySelector('.tasks__list');
const form = document.getElementById('tasks__form');

const taskList = [];

const addTask = (el) => {
    let inputText = el || input.value;
    if (inputText !== '') {
        const task = document.createElement('div');
        task.classList.add('task');
        task.innerHTML = `<div class="task__title">${inputText}</div><a href="#" class="task__remove">&times;</a>`;
        list.append(task);
        const taskTitle = inputText;
        const btnRemove = task.querySelector('.task__remove');
        btnRemove.addEventListener('click', (e) => {
            e.preventDefault();
            task.remove();
            const index = taskList.indexOf(taskTitle);
            if (index !== -1) {
                taskList.splice(index, 1);
            }
            localStorage.setItem('tasks', JSON.stringify(taskList));
        })
        if (!el) {
            taskList.push(inputText);
        }
        localStorage.setItem('tasks', JSON.stringify(taskList));
        input.value = '';


    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTask()
});

const saved = JSON.parse(localStorage.getItem('tasks') || '[]');

saved.forEach(i => {
    taskList.push(i);
    addTask(i);
});