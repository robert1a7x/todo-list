import React,  { useContext } from 'react';
import { myContext } from '../context/Provider';
import { MdDelete } from 'react-icons/md';
import { RiEdit2Fill } from 'react-icons/ri';

const Todo = () => {
	const { todos, removeTodo } = useContext(myContext);

	return (
		<div>
			{ todos.map(({ id, todo }) => (
				<div key={ id }>
					<div>
						{ todo }
					</div>
					<div>
						<MdDelete
							onClick={ (e) => removeTodo(id) }
						/>  
						<RiEdit2Fill

						/>
					</div>
				</div>
			)) }
		</div>
	);
};

export default Todo;
