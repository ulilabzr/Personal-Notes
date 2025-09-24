import React from "react";

function AddNoteForm({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const maxTitleLength = 50;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && body.trim()) {
      onAddNote({
        id: +new Date(),
        title: title.trim(),
        body: body.trim(),
        archived: false,
        createdAt: new Date().toISOString(),
      });
      setTitle("");
      setBody("");
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
          onChange={(e) => {
            if (e.target.value.length <= maxTitleLength) {
              setTitle(e.target.value);
            }
          }}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Isi Catatan</label>
        <textarea
          className="form-input form-textarea"
          placeholder="Tulis catatan Anda di sini..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="btn"
        disabled={!title.trim() || !body.trim()}
      >
        <i className="fas fa-plus"></i>
        Tambah Catatan
      </button>
    </form>
  );
}

export default AddNoteForm;
