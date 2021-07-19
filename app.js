// UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.group-tasks');
const clearTasks = document.querySelector('.remove');
const taskInput = document.querySelector('#task');


// Event listeners

loadEventListeners();



// Load all event listeners
function loadEventListeners(){
    // DOM load event
    document.addEventListener('DOMContentLoaded', getTasks);
    // Add task event
    form.addEventListener('submit', addTask);
    // Remove task event
    taskList.addEventListener('click', removeTask);
    // Clear task event
    clearTasks.addEventListener('click', clearList);
}

// get tasks from Local Storage
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task){
    // Create li element
    const li = document.createElement('li');
    // Add a class


    // Create text node
    li.appendChild(document.createTextNode(task));
    // Create new link element
    const link = document.createElement('a');
    // Add Class
    link.className = 'delete-li';
    // Add icon html
    link.innerHTML = '<i class="fas fa-trash"></i>';
    // Append the link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);

    });
}


// Add task
function addTask(e){
    if(taskInput.value === ''){
        alert('Please add a task');
    }

    // Create li element
    const li = document.createElement('li');
    // Add a class


    // Create text node
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    // Add Class
    link.className = 'delete-li';
    // Add icon html
    link.innerHTML = '<i class="fas fa-trash"></i>';
    // Append the link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);

    // Store in LS
    storeTaskInLocalStorage(taskInput.value);

// Clear input
taskInput.value = '';


    e.preventDefault();
}


// Store Task
function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove Task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-li')){
        if(confirm('Are you sure?')){
        e.target.parentElement.parentElement.remove();

        // Remove from LS
        removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
    }
}
// Remove from LS
function removeTaskFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
        tasks.splice(index, 1);
    }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}


// Clear list
function clearList(){
    // taskList.innerHTML = '':
    // Fast way
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }

    // Clear from LS
    clearTasksFromLocalStorage();
}

//Clear list from Local Storage
function clearTasksFromLocalStorage(){
    localStorage.clear();
}
