import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({ task, deleteTask }) => {
  return (
    <div className="todo-item">
      <p>{task.text}</p>
      <button onClick={() => deleteTask(task.id)}>❌ Delete</button>
    </div>
  );
};

// ✅ PropTypes validation
TodoItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TodoItem;
