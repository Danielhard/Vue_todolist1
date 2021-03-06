var STORAGE_KEY = 'todolist'
window.todoStorage = {
    fetch() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        } catch (err) {
            return [];
        }

    },
    save(todolist) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todolist));
    }
}

