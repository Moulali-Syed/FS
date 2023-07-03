import React, { useState } from 'react';
import './AddTodo.css';
const AddTodo = ({ addTodo, edit }) => {
  const [todo, setTodo] = useState('');

  function changeHandler(e) {
    setTodo(e.target.value);
  }
  function addHandler() {
    console.log(todo);
    addTodo(todo);
    setTodo('');
  }

  function editHandler() {
    if (edit) {
      setTodo(edit);
    }
  }

  return (
    <div>
      <input
        type="text"
        className="input"
        value={todo}
        name="todo"
        onChange={changeHandler}
      />
      <button onClick={addHandler}>Add</button>
    </div>
  );
};

export default AddTodo;
