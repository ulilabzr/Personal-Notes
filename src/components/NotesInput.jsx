import React, { useState } from "react";
import PropTypes from 'prop-types';

function NotesInput({ addNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onBodyChange = (event) => {
    setBody(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addNote({ title, body });
    setTitle("");
    setBody("");
  };

  return (
    <form className="note-input" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={onTitleChange}
      />
      <textarea
        type="text"
        placeholder="Write your note here..."
        value={body}
        onChange={onBodyChange}
      />
      <button type="submit">Add Note</button>
    </form>
  );
}

NotesInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NotesInput;
