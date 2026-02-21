
function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoDate = document.getElementById('todo-date');
    const todoList = document.getElementById('todo-list');

    const todoText = todoInput.value.trim();
    const todoDueDate = todoDate.value;

    if (todoText === '') {
        alert('Please enter a task.');
        return;
    }

    const li = document.createElement('li');
    li.textContent = `${todoText} (Due: ${todoDueDate})`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded';
    deleteButton.onclick = function() {
        todoList.removeChild(li);
    };

    li.appendChild(deleteButton);
    todoList.appendChild(li);

     const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.className = 'ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded';

    completeButton.onclick = function() {
        li.style.textDecoration = 'line-through';
        li.style.textDecoration = 'line-through';
        li.style.fontStyle = 'italic';
        li.style.color = '#888';
        completeButton.disabled = true;
    };
    li.appendChild(completeButton);
    todoList.appendChild(li);

    todoInput.value = '';
    todoDate.value = '';
}

function filterTasks() {
    const todoList = document.getElementById('todo-list');
    // 1. Ubah HTMLCollection menjadi Array agar bisa di-sort
    const tasks = Array.from(todoList.getElementsByTagName('li'));

    // 2. Proses pengurutan
    tasks.sort((a, b) => {
        // Ambil string tanggal dari teks, misal: "2023-12-31"
        const dateA = new Date(a.textContent.match(/\d{4}-\d{2}-\d{2}/));
        const dateB = new Date(b.textContent.match(/\d{4}-\d{2}-\d{2}/));
        
        return dateA - dateB; // Urutan: Terlama -> Terbaru
    });

    // 3. Kosongkan list lama dan masukkan yang sudah urut
    todoList.innerHTML = "";
    tasks.forEach(task => todoList.appendChild(task));
}

function markAllComplete() {
    const todoList = document.getElementById('todo-list');
    const tasks = todoList.getElementsByTagName('li');
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        task.style.textDecoration = 'line-through';
        task.style.fontStyle = 'italic';
        task.style.color = '#888';
    }
}

function clearAll() {
    const todoList = document.getElementById('todo-list');
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }
}