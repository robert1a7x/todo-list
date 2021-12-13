const TODO_KEY = 'todos';

if (!JSON.parse(localStorage.getItem(TODO_KEY))) {
  localStorage.setItem(TODO_KEY, JSON.stringify([]));
}
const readTodos = () => JSON.parse(localStorage.getItem(TODO_KEY));

const saveTodos = (todos) => localStorage
  .setItem(TODO_KEY, JSON.stringify(todos));

export const getTodosFromLocalStorage = () => {
  const todos = readTodos();
	return todos;
};

export const addTodoToLocalStorage = (todo) => {
  if (todo) {
    const todos = readTodos();
    saveTodos([...todos, todo]);
  }
};

export const uptadeTodosInLocalStorage = (todos) => {
	saveTodos([...todos])
}

export const removeTodoFromLocalStorage = (id) => {
  const todos = readTodos();
  saveTodos(todos.filter((s) => s.id !== id));
};
