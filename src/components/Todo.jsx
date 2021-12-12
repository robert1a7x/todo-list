import React,  { useContext } from 'react';
import { myContext } from '../context/Provider';
import { MdDelete } from 'react-icons/md';
import { RiEdit2Fill } from 'react-icons/ri';

const Todo = () => {
	const { todos, removeTodo, completeTodo, setEditing, setEditData } = useContext(myContext);

	return (
		<div>
			{ todos.map(({ id, todo, isComplete }) => (
				<div className="todo-row" key={ id }>
					<div
						onClick={ () => completeTodo(id) }
						style={ isComplete ? { textDecoration: 'line-through', opacity: '0.4' } : null }
					>
						{ todo }
					</div>
					<div className="icons">
						<MdDelete
							className="delete-icon"
							onClick={ () => removeTodo(id) }
						/>  
						<RiEdit2Fill
							className="edit-icon"
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
