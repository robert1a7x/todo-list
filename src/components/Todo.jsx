import React,  { useContext } from 'react';
import { myContext } from '../context/Provider';

const Todo = () => {
	const { todos } = useContext(myContext);
	return (
		<div>
			{ todos.map(({ id, todo }) => (
				<div key={ id }>
					{ todo }
				</div>
			)) }
		</div>
	);
};

export default Todo;
