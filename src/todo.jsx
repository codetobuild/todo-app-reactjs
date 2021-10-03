import React, { useContext, useState } from "react";
import TodoBody from "./components/todoBody";
import TodoHead from "./components/todoHead";
import { Theme } from "./index";
import useTodo from "./hooks/useTodo";

const TODO = () => {
  // consume theme
  const theme = useContext(Theme);
  // call custom hook
  const { handleNewTask, handleCheck, handleDelete, tasks } = useTodo();

  const bootstrapColumn = "col-sm-0 col-md-1 col-lg-3";
  const todoDoStyle = { background: theme.todoCard };

  // return jsx 
  return (
    <div className="container-sm">
      <div className="row">
        <div className={bootstrapColumn}></div>
        <div
          className="col-sm-12 col-md-10 col-lg-6  p-xs-5 p-sm-4 p-md-4 p-lg-5 rounded"
          style={todoDoStyle}>
          <TodoHead newTask={handleNewTask} />
          <TodoBody
            tasks={tasks}
            onCheck={handleCheck}
            onDelete={handleDelete}
          />
          <a></a>
        </div>
        <div className={bootstrapColumn}></div>

      </div>
    </div>
  );
};

export default TODO;
