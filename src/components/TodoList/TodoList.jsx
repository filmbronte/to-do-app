export const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <>
      <h2>Todo List</h2>
      <ul>
        {todos.length == 0 ? (
          <h3>No items to show.</h3>
        ) : (
          todos.map((todo) => {
            return (
              <li key={todo.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={todo.checked}
                    onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                  />
                  {todo.title}
                </label>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="btn btn-delete"
                >
                  Delete
                </button>
              </li>
            );
          })
        )}
      </ul>
    </>
  );
};
