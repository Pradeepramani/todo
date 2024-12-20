import { useState } from "react";

function Todo({ text, delete1, id, edit1 }) {
  const [isEditing, setIsEditing] = useState(false); // Tracks if in edit mode
  const [text1, setText1] = useState(text); // Local state for editing

  return (
    <>
      {/* Display text or input field based on edit mode */}
      {isEditing ? (
        <input
          type="text"
          value={text1}
          onChange={(e) => setText1(e.target.value)}
        />
      ) : (
        <h1>{text1}</h1>
      )}

      {/* Edit button toggles edit mode and saves changes */}
      <button
        onClick={() => {
          if (isEditing) {
            edit1(text1); // Call edit1 function with updated text
          }
          setIsEditing(!isEditing); // Toggle edit mode
        }}
      >
        {isEditing ? "Save" : "Edit"}
      </button>

      {/* Delete button calls delete1 function */}
      <button onClick={() => delete1(id)}>Delete</button>
    </>
  );
}

export default Todo;
