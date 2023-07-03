import { useState } from 'react';
import './App.css';
import DisplayTodos from './components/DisplayTodos';
import AddTodo from './components/AddTodo';

function App() {
  const listOfTodos = ['Code', 'Learn', 'Practice'];
  const [todos, setTodos] = useState(listOfTodos);
  const [edit, setEdit] = useState('');

  function addTodo(newTodo) {
    console.log(newTodo);
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  }

  function deleteTodo(id) {
    const newTodos = [...todos];
    newTodos.splice(id, 1);
    setTodos(newTodos);
  }

  function editTodo(id) {
    const tobeEdit = todos[id];
    setEdit(tobeEdit);
  }
  return (
    <>
      <h1>CRUD Operations</h1>

      <AddTodo addTodo={addTodo} edit={edit} />
      <div className="container">
        <DisplayTodos
          todos={todos}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      </div>
    </>
  );
}

export default App;
