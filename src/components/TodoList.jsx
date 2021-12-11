import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = () => {
	return (
		<div>
			<TodoForm />
			<Todo />
		</div>
	);
};

export default TodoList;
