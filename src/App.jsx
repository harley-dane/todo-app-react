import React, { useState } from "react";
import TodoList from "./components/TodoList";
import AddTask from "./components/AddTask";
import "./index.css";

const defaultTasks = [
  { id: 1, text: "Shopping" },
  { id: 2, text: "Washing the Car" },
  { id: 3, text: "Cleaning the House" },
];

const App = () => {
  const [tasks, setTasks] = useState(defaultTasks);

  const addTask = (newTask) => {
    setTasks([...tasks, { id: tasks.length + 1, text: newTask }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <h1>📝 To-Do List</h1>
      <AddTask addTask={addTask} />
      <TodoList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
