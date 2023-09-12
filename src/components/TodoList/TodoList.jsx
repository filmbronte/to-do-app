import { TodoItem } from "./TodoItem/TodoItem";

export const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <>
      <h2>Tasks</h2>
      <ul>
        {todos.length == 0 ? (
          <h3>No items to show.</h3>
        ) : (
          todos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                id={todo.id}
                completed={todo.completed}
                title={todo.title}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
              />
            );
          })
        )}
      </ul>
    </>
  );
};
