import React, { useState } from "react";
import PropTypes from "prop-types";

const TodoItem = ({ task, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleSave = () => {
    editTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <p>{task.text}</p>
      )}

      {isEditing ? (
        <button onClick={handleSave}>✔️ Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>✏️ Edit</button>
      )}
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
  editTask: PropTypes.func.isRequired,
};

export default TodoItem;
