import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = () => {
	return (
		<div>
			<h1>Quais são os planos pra hoje?</h1>
			<TodoForm />
			<Todo />
		</div>
	);
};

export default TodoList;
