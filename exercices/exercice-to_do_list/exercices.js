let toDo = [];
let done = [];

let printToDo = document.getElementById('toDo');
let printDone = document.getElementById('done');

let addToDo = document.getElementById('addToDo');
let newToDo = document.getElementById('newToDo');

if(localStorage.getItem("toDo")){
    toDo = JSON.parse(localStorage.getItem("toDo"));
}

if(localStorage.getItem("done")){
    done = JSON.parse(localStorage.getItem("done"));
}

window.addEventListener('beforeunload', function() {
    localStorage.setItem("toDo", JSON.stringify(toDo));
    localStorage.setItem("done", JSON.stringify(done));
});

function switchTasks(e){
    task = e.target;
    if(toDo.includes(task.textContent)){
        toDo.splice(toDo.indexOf(task.textContent), 1);
        done.push(task.textContent);
        task.removeEventListener('click', switchTasks);
        printToDo.removeChild(task);
    } else if (done.includes(task.textContent)){
        done.splice(done.indexOf(task.textContent), 1);
        toDo.push(task.textContent);
        task.removeEventListener('click', switchTasks);
        printDone.removeChild(task);
    } else {
        alert("Error: This task is not in list");
    }
    buildTasks();
}

function addEventToTask(){
    let tasks = document.getElementsByClassName('tasks');
    for (let index = 0; index < tasks.length; index++) {
        const task = tasks[index];
        task.addEventListener('click', switchTasks)
    }
}

function buildTasks(){
    printToDo.innerHTML = ""
    toDo.forEach(element => {
        printToDo.innerHTML += `<div class='tasks'>${element}</div>`;
    });

    printDone.innerHTML = ""
    done.forEach(element => {
        printDone.innerHTML += `<div class='tasks'>${element}</div>`;
    });

    addEventToTask();
}

addToDo.addEventListener('submit', (e) => {
    e.preventDefault();

    toDo.push(newToDo.value);
    
    newToDo.value = "";
    buildTasks();
});

buildTasks();




