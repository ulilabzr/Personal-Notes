import React from "react";

function NoteCard({ note, onDelete, onToggleArchive }) {
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  return (
    <div className="note-card">
      <h3 className="note-title">{note.title}</h3>
      <div className="note-date">
        <i className="fas fa-calendar-alt"></i>
        {formatDate(note.createdAt)}
      </div>
      <p className="note-body">{note.body}</p>
      <div className="note-actions">
        <button
          className={`btn-small ${
            note.archived ? "btn-unarchive" : "btn-archive"
          }`}
          onClick={() => onToggleArchive(note.id)}
        >
          <i
            className={`fas ${note.archived ? "fa-box-open" : "fa-archive"}`}
          ></i>
          {note.archived ? "Pindahkan" : "Arsipkan"}
        </button>
        <button
          className="btn-small btn-delete"
          onClick={() => onDelete(note.id)}
        >
          <i className="fas fa-trash"></i>
          Hapus
        </button>
      </div>
    </div>
  );
}

export default NoteCard;
