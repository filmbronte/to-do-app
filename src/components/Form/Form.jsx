import { useState } from "react";

export const Form = ({ submitHandler }) => {
  const [newItem, setNewItem] = useState("");

  function onSubmit(e) {
    e.preventDefault();

    if (newItem == "") {
      return;
    }

    submitHandler(newItem);

    setNewItem("");
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="task">New task: </label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="task"
          name="task"
        />
      </div>
      <div>
        <button>Add</button>
      </div>
    </form>
  );
};
