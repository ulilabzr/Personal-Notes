import React, { useState, useRef } from "react";

function AddNoteForm({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const maxTitleLength = 50;
  const bodyRef = useRef(null);

  const handleTitleChange = (e) => {
    if (e.target.value.length <= maxTitleLength) {
      setTitle(e.target.value);
    }
  };

  const handleBodyInput = (e) => {
    setBody(e.target.innerHTML);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && body.trim()) {
      onAddNote({
        title: title.trim(),
        body: body.trim(),
      });
      setTitle("");
      setBody("");
      if (bodyRef.current) bodyRef.current.innerHTML = "";
    }
  };

  const remainingChars = maxTitleLength - title.length;

  return (
    <form onSubmit={handleSubmit} className="add-note-form">
      <div className="form-group">
        <label className="form-label">
          Judul Catatan
          <span
            className={`char-limit ${remainingChars < 10 ? "warning" : ""}`}
          >
            ({remainingChars} karakter tersisa)
          </span>
        </label>
        <input
          type="text"
          className="form-input"
          placeholder="Masukkan judul catatan..."
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Isi Catatan</label>
        <div
          className="form-input form-textarea"
          placeholder="Tulis catatan Anda di sini..."
          contentEditable
          ref={bodyRef}
          onInput={handleBodyInput}
          data-placeholder="Tulis catatan Anda di sini..."
          style={{
            minHeight: 120,
            background: "#fff",
            border: "1px solid #e9e9e7",
            borderRadius: 6,
            padding: 12,
          }}
        />
      </div>
      <button
        type="submit"
        className="btn"
        disabled={!title.trim() || !body.trim()}
      >
        Tambah Catatan
      </button>
    </form>
  );
}

export default AddNoteForm;
