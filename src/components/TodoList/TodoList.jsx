export const TodoList = ({ todos }) => {
  return (
    <>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input type="checkbox" checked={todo.checked} />
                {todo.title}
              </label>
              <button className="btn btn-delete">Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
