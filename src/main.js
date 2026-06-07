import './sass/style.scss';
import toggleIcon from './img/toggle.svg';
import deleteIcon from './img/delete.svg';



const input = document.querySelector('#taskInput');
const addBtn = document.querySelector('#addBtn');
const list = document.querySelector('#taskList');

let tasks = [];


function render() {
    list.innerHTML = '';


    tasks.forEach((task, index) => {

        const li = document.createElement('li');
        li.className = 'list__item';


        if (task.done) {
            li.classList.add('list__item--done');
        }

        li.innerHTML = `
      <span class="list__text">${task.text}</span>
      <div class="list__buttons"><button class="list__toggle"><img src="${toggleIcon}" alt="отметить">
</button>
      <button class="list__delete"><img src="${deleteIcon}" alt="отметить">
</button></div>
    `;

        li.querySelector('.list__toggle').addEventListener('click', () => {

            tasks[index].done = !tasks[index].done;
            render();
        });

        li.querySelector('.list__delete').addEventListener('click', () => {

            tasks.splice(index, 1);
            render();
        });


        list.appendChild(li);
    });
}

function addTask() {
    const text = input.value.trim();

    if (text === '') return;
    tasks.push({ text: text, done: false });

    input.value = '';
    render();
}

addBtn.addEventListener('click', addTask);

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

render();