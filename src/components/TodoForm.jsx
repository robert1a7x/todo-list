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
    <form onSubmit={ handleSubmit }>
      <input
        placeholder="Edite a tarefa"
        type="text"
        value={ input }
        onChange={ (e) => setInput(e.target.value) }
      />
      <button>Editar</button>
    </form>
  ) : (
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
