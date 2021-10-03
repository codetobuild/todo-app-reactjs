import { useState } from "react";
import { v4 as uuid } from "uuid";

const useTodo = () => {
  // tasks state
  const [tasks, setTasks] = useState([]);

  // handle functoins
  const handleNewTask = (task) => {
    const newTask = {
      id: uuid(),
      task: task,
      createAt: Date.now(),
      done: false,
    };
    const allTasks = [newTask, ...tasks];
    setTasks(allTasks);
  };
  const handleCheck = (taskId) => {
    const allTasks = [...tasks];
    const index = allTasks.findIndex((task) => task.id === taskId);
    allTasks[index].done = !allTasks[index].done;
    setTasks(allTasks);
  };
  const handleDelete = (taskId) => {
    let allTasks = [...tasks];
    allTasks = allTasks.filter((task) => task.id !== taskId);
    setTasks(allTasks);
  };

  return { handleNewTask, handleCheck, handleDelete, tasks };
};

export default useTodo;
