import { useState } from "react";

import { Form } from "./components/Form/Form.jsx";
import { TodoList } from "./components/TodoList/TodoList.jsx";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  function addItemHandler(title) {
    setTodos((current) => {
      return [...current, { id: crypto.randomUUID(), title, completed: false }];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <Form submitHandler={addItemHandler} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
