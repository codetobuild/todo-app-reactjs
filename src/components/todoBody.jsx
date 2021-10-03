import React, { useContext, useState } from "react";
import TodoList from "./todoList";
import { Theme } from "../index";

const TodoBody = (props) => {
  const theme = useContext(Theme);

  const [list, setList] = useState("");
  const { tasks, onCheck, onDelete } = props;

  const totalNotDoneTask = tasks.filter((t) => !t.done).length;

  const handleMouseLeave = () => setList("");
  const handleMouseOver = (id) => setList(id);

  // return jsx
  return (
    <main>
      <h5>
        To do
        <span
          className="badge ms-2"
          style={{ background: theme.button, color: "black" }}>
          {totalNotDoneTask}
        </span>
      </h5>
      <ul
        className="list-group "
        style={{ background: theme.todoList }}
        onMouseLeave={handleMouseLeave}>
        <TodoList
          tasks={tasks}
          onCheck={onCheck}
          onDelete={onDelete}
          onMouseOver={handleMouseOver}
          currentList={list}
        />
      </ul>
    </main>
  );
};

export default TodoBody;
