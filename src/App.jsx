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

  return (
    <>
      <Form submitHandler={addItemHandler} />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
