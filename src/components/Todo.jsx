import React,  { useContext } from 'react';
import { myContext } from '../context/Provider';
import { MdDelete } from 'react-icons/md';
import { RiEdit2Fill } from 'react-icons/ri';

const Todo = () => {
	const { todos, removeTodo, completeTodo, setEditing, setEditData } = useContext(myContext);

	return (
		<div>
			{ todos.map(({ id, todo, isComplete }) => (
				<div key={ id }>
					<div 
						onClick={ () => completeTodo(id) }
						style={ isComplete ? { textDecoration: 'line-through', opacity: '0.4' } : null }
					>
						{ todo }
					</div>
					<div>
						<MdDelete
							onClick={ (e) => removeTodo(id) }
						/>  
						<RiEdit2Fill
							onClick={ () => {
								setEditing(true);
								setEditData({ id, todo })
							} }
						/>
					</div>
				</div>
			)) }
		</div>
	);
};

export default Todo;
