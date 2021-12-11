import React, { createContext, useState } from 'react';

export const myContext = createContext();

export const Provider = ({ children }) => {
	const [todos, setTodos] = useState([]);

	const addTodo = (todo) => {
		const newTodo = {
			id: Math.floor(Math.random() * 1000),
			todo,
		}

		setTodos([...todos, newTodo]);
	}

	const context ={
		todos,
		setTodos,
		addTodo,
	}

	return (
		<myContext.Provider value={ context }>
			{ children }
		</myContext.Provider>
	);
};
