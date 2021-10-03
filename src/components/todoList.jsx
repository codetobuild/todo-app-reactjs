import React, { useContext, useState } from "react";
import { Theme } from "../index";

const TodoList = (props) => {
  const theme = useContext(Theme);
  const { tasks, onMouseOver, onCheck, onDelete, currentList } = props;

  let checkBox = "far fa-square";
  const checkBoxDone = "far fa-check-square";
  let deleteBox = "fas fa-times";
  const deleteBoxStyle = {
    color: "#FF5C58",
    cursor: "pointer",
    display: "block",
  };
  let listLabelStyle = "d-flex ps-3 pe-3 fs-5 flex-grow-1 text-truncate";
  const listBoostrap = "list-group-item d-flex flex-row align-items-center";

  return (
    <>
      {tasks.map((t) => (
        <li
          className={listBoostrap}
          key={t.id}
          style={
            t.done
              ? { background: theme.doneList }
              : { background: theme.todoList }
          }
          onMouseOver={() => onMouseOver(t.id)}>
          <div className="d-flex fs-5">
            <i
              className={t.done ? checkBoxDone : checkBox}
              style={{ color: theme.button, cursor: "pointer" }}
              onClick={() => onCheck(t.id)}></i>
          </div>

          <div
            className={
              t.done
                ? `${listLabelStyle} text-decoration-line-through`
                : listLabelStyle
            }
            style={{ color: "white" }}>
            {t.task}
          </div>
          <div className="d-flex p-1 fs-5">
            <i
              className={deleteBox}
              style={
                currentList === t.id
                  ? deleteBoxStyle
                  : { ...deleteBoxStyle, display: "none" }
              }
              onClick={() => onDelete(t.id)}></i>
          </div>
        </li>
      ))}
    </>
  );
};

export default TodoList;
