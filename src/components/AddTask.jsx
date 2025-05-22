import React, { useState } from "react";
import PropTypes from "prop-types";

const AddTask = ({ addTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      addTask(newTask);
      setNewTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <input
        type="text"
        placeholder="Add new task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button type="submit">➕ Add</button>
    </form>
  );
};

// ✅ PropTypes validation
AddTask.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default AddTask;
