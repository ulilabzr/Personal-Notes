import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import parser from "html-react-parser";
import NotesContext from "../contexts/NotesContext";

function NotesDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { notes, onDelete, onToggleArchive } = useContext(NotesContext);

  const note = notes.find((n) => String(n.id) === id);

  if (!note) {
    return <div className="empty-state">Catatan tidak ditemukan</div>;
  }

  const handleDelete = () => {
    onDelete(note.id);
    navigate("/");
  };

  const handleToggleArchive = () => {
    onToggleArchive(note.id);
    navigate("/");
  };

  return (
    <div className="note-app">
      <div className="note-app__header">
        <h1>{note.title}</h1>
        <div className="note-date">
          {new Date(note.createdAt).toLocaleString()}
        </div>
      </div>

      <div className="note-body">{parser(note.body)}</div>

      <div className="note-actions" style={{ marginTop: 24 }}>
        <button className="btn btn-delete" onClick={handleDelete}>
          <i className="fa-solid fa-trash"></i> Hapus
        </button>

        <button
          className={`btn ${note.archived ? "btn-unarchive" : "btn-archive"}`}
          onClick={handleToggleArchive}
        >
          {note.archived ? ("Batal Arsip") : (
            <>
              <i className="fa-solid fa-box-archive"></i> Arsip
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default NotesDetail;
