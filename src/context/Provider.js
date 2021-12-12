import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';

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
	}

	const removeTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	}

	const completeTodo = (id) => {
		let updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				todo.isComplete = !todo.isComplete;
			}
			return todo;
		})
		setTodos(updatedTodos);
	}

	const editTodo = ({ id, todo }, newValue) => {
		if (!todo || /^\s*$/.test(todo)) {
			return;
		}
		setTodos(prev => prev.map((t) => t.id === id ? { id, todo: newValue} : t));
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
