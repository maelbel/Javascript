function switchTask(e){
    let task;
    let taskId = parseInt(e.target.id.split("_")[1]);
    let toDoTask = toDo.getTasks.find(task => task.id === taskId);
    let doneTask = done.getTasks.find(task => task.id === taskId);
    if(toDoTask){
        task = new Task(toDoTask.nom, toDoTask.id),
        toDo.removeTasks(task);
        done.addTasks(task);
    } else if (doneTask){
        task = new Task(doneTask.nom, doneTask.id),
        done.removeTasks(task);
        toDo.addTasks(task);
    } else {
        alert("Error: This task is not in list");
    }
}

class Task {

    static nbTask = 0;

    constructor(nom, id) {
        this.nom = nom;
        if(id || id == 0){
            this.id = id;    
        } else {
            this.id = Task.nbTask;
            Task.nbTask++;
        }
    }

    get getNom() {
        return this.nom;
    }

    buildHTML() {
        let taskHTML = document.createElement("div");
        taskHTML.textContent = this.nom;
        taskHTML.id = `task_${this.id}`;
        taskHTML.classList.add("task");
        taskHTML.addEventListener('click', switchTask);
        return taskHTML;
    }
}

class Column {

    constructor(id, nom) {
        this.id = id;
        this.nom = nom;
        this.tasks = JSON.parse(localStorage.getItem(this.id)).map(task => new Task(task.nom, task.id)) || [];
        this.buildHTML();
    }

    get getTasks(){
        return this.tasks;
    }

    set setTasks(tasks){
        this.tasks = tasks;
    }

    addTasks(task){
        this.tasks.push(task);
        let divTasks = document.getElementById(`tasks_${this.id}`);
        divTasks.appendChild(task.buildHTML());
    }

    removeTasks(task){
        this.tasks.splice(this.tasks.map(task => task.id).indexOf(task.id), 1);
        const taskHTML = document.getElementById(`task_${task.id}`);
        taskHTML.removeEventListener('click', switchTask);
        taskHTML.parentNode.removeChild(taskHTML);
    }

    buildHTML(){
        let content = document.getElementById("content");

        let html = `<div id="${this.id}" class="column">
                        <h2>${this.nom}</h2>
                        <div id="tasks_${this.id}" class="tasks"></div>
                    </div>`;

        content.innerHTML += html;

        let divTasks = document.getElementById(`tasks_${this.id}`);

        if(this.tasks.length > 0) {
            this.tasks.forEach(task => {
                divTasks.appendChild(task.buildHTML());
            });
        }

    }

}

const toDo = new Column("toDo", "To Do", []);
const done = new Column("done", "Done", []);

let content = document.getElementById('content');

let addToDo = document.getElementById('addToDo');
let newToDo = document.getElementById('newToDo');

window.addEventListener('beforeunload', function(e) {
    localStorage.setItem("toDo", JSON.stringify(toDo.getTasks));
    localStorage.setItem("done", JSON.stringify(done.getTasks));
});

addToDo.addEventListener('submit', (e) => {
    e.preventDefault();

    toDo.addTasks(new Task(newToDo.value));
    
    newToDo.value = "";
});