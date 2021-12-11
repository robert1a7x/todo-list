import React, { useState, useContext } from 'react';
import { myContext } from '../context/Provider';

const TodoForm = () => {
	const { addTodo } = useContext(myContext);
	const [input, setInput] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		addTodo(input);
		setInput('');
	}

	return (
		<form onSubmit={ handleSubmit }>
			<input
				placeholder="insira a tarefa"
				type="text"
				value={ input }
				onChange={ (e) => setInput(e.target.value) }
			/>
			<button>Adicionar</button>
		</form>
	);
};

export default TodoForm;
