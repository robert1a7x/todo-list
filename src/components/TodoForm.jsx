import React, { useState, useContext } from 'react';
import { myContext } from '../context/Provider';

const TodoForm = () => {
  const { addTodo, editing, editData, setEditing, editTodo } = useContext(myContext);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    editing ? editTodo(editData, input) : addTodo(input);
    setInput('');
		setEditing(false);
  };

  return editing ? (
    <form className="todo-form" onSubmit={ handleSubmit }>
      <input
        className="todo-input edit"
        placeholder="Edite a tarefa"
        type="text"
        value={ input }
        onChange={ (e) => setInput(e.target.value) }
      />
      <button className="todo-button edit">Editar</button>
    </form>
  ) : (
    <form className="todo-form" onSubmit={ handleSubmit }>
      <input
        className="todo-input"
        placeholder="Insira uma tarefa"
        type="text"
        value={ input }
        onChange={ (e) => setInput(e.target.value) }
      />
      <button className="todo-button">Adicionar</button>
    </form>
  );
};

export default TodoForm;
