import React, { useContext, useState } from "react";
import { Theme } from "../index";

const TodoHead = (props) => {
  // consume theme
  const theme = useContext(Theme);

  const addButtonStyle = {
    background: theme.button,
    fontWeight: "bolder",
    cursor: "pointer",
  };

  const [task, setTask] = useState("");

  const handleClick = (e) => {
    if (task.trim().length <= 0) {
      return;
    } else {
      console.log(task);
      props.newTask(task); // raise event
      setTask("");
    }
  };

  return (
    <div className="mb-5">
      <header>
        <h1 className="text-center mb-2">Todo List</h1>
      </header>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add tasks..."
          aria-label="new todo task"
          aria-describedby="add-new-task"
          name="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="btn input-group-text"
          style={addButtonStyle}
          onClick={handleClick}>
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TodoHead;
