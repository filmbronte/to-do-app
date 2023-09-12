export const TodoItem = ({ id, completed, title, toggleTodo, deleteTodo }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label className="checkbox-label">{title}</label>
      <button onClick={() => deleteTodo(id)} className="btn btn-delete">
        Delete
      </button>
    </li>
  );
};
