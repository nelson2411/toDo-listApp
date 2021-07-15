// Defining UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.group-tasks');
const clearTasks = document.querySelector('.remove');
const taskInput = document.querySelector('#task');


// Load all event listeners

loadEventListeners();



// Load all event listeners
function loadEventListeners(){
    // Add task event
    form.addEventListener('submit', addTask);
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


// Clear input
taskInput.value = '';


    e.preventDefault();
}