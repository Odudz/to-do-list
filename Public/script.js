class Task{
    constructor(description){
        this.description = description;
        this.completed = false;
    }

    toggleComplete(){
        this.completed = !this.completed;
    }
}

class TaskManager{
    constructor(){
        this.taskList = document.getElementById('task-list');
        this.loadTasks();
    }

    async loadTasks(){
        const response = await fetch('/tasks');
        const tasks = await response.json();
        this.render(tasks);
    }

    async addTask(description){
        await fetch('/task', {
            method: 'POST',
            headers: { 'Content-type': 'application' },
            body: JSON.stringify({ description })
        });
        this.loudTasks();
    }

    async RemoveTask(id){
        await fetch(`/tasks/${id}`, {method: 'DELETE'});
        this.loadTasks();
    }

    async toggleTask(id){
        await fetch(`/tasks/${id}/toggle`, {method: 'PATCH'});
    }

    render(tasks){
        this.taskList.innerHTML = '';

        tasks.forEach(task => { 
            const li = document.createElement('li');

        })
    }
}

document.addEventListener('DOMContentLoaded', () =>{
    const TaskManager = new TaskManager();
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');

    addTaskBtn.addEventListener('click', () =>{
        const taskDescription = taskInput.value.trim();
    })
})