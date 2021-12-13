import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';
import { addTodoToLocalStorage, removeTodoFromLocalStorage, uptadeTodosInLocalStorage } from '../services/localStorage';

export const myContext = createContext();

export const Provider = ({ children }) => {
	const [todos, setTodos] = useState([]);
	const [editing, setEditing] = useState(false);
	const [editData, setEditData] = useState({
		id: '',
		todo: '',
	});

	const addTodo = (todo) => {
		const newTodo = {
			id: Math.floor(Math.random() * 1000),
			todo,
		}

		setTodos([...todos, newTodo]);
		addTodoToLocalStorage(newTodo);
	}

	const removeTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
		removeTodoFromLocalStorage(id)
	}

	const completeTodo = (id) => {
		let updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				todo.isComplete = !todo.isComplete;
			}
			return todo;
		})
		setTodos(updatedTodos);
		uptadeTodosInLocalStorage(updatedTodos);
	}

	const editTodo = ({ id, todo }, newValue) => {
		if (!todo || /^\s*$/.test(todo)) {
			return;
		}

		const updatedTodos = todos.map((tod) => tod.id === id ? { id, todo: newValue} : tod);
	
		setTodos(updatedTodos);
		uptadeTodosInLocalStorage(updatedTodos);
	}

	const context ={
		todos,
		editing,
		editData,
		setTodos,
		addTodo,
		removeTodo,
		completeTodo,
		setEditing,
		editTodo,
		setEditData,
	}

	return (
		<myContext.Provider value={ context }>
			{ children }
		</myContext.Provider>
	);
};

Provider.propTypes = {
	children: PropTypes.node.isRequired,
};
