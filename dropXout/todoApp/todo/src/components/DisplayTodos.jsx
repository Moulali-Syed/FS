import React from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import './DisplayTodos.css';

const DisplayTodos = ({ todos, deleteTodo, editTodo }) => {
  return (
    <>
      <div>
        {todos.map((todo, index) => (
          <div key={index} className="container">
            <p className="todo">
              {todo}
              <span onClick={() => editTodo(index)}>
                <AiFillEdit />
              </span>
              <span onClick={() => deleteTodo(index)}>
                <AiFillDelete />
              </span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default DisplayTodos;
