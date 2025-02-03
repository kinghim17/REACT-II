import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Go to the gym",
      description: "Workout at the gym today",
    },
    {
      id: 2,
      title: "Buy groceries",
      description: "Purchase vegetables and fruits",
    },
    {
      id: 3,
      title: "Read a book",
      description: "Read a new book from the library",
    },
  ]);

  function addTodo() {
    const newTodos = [...todos];
    const id = todos.length + 1;
    newTodos.push({
      id: id,
      title: `New Task ${id}`,
      description: "This is a dynamically added task",
    });
    setTodos(newTodos);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <button onClick={addTodo}>Add a New Todo</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default App;
