import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NotesContext from "../contexts/NotesContext";
import parser from "html-react-parser";

function NotesDetail() {
  const { id } = useParams();
  const { notes, onDelete, onToggleArchive } = useContext(NotesContext);
  const navigate = useNavigate();
  const note = notes.find((n) => String(n.id) === id);

  if (!note) {
    return <div className="empty-state">Catatan tidak ditemukan</div>;
  }

  return (
    <div className="note-app">
      <div className="note-app__header">
        <h1>{note.title}</h1>
        <div className="note-date">{new Date(note.createdAt).toLocaleString()}</div>
      </div>
      <div className="note-body" style={{ background: "#fff", color: "#37352f", padding: 16, borderRadius: 8 }}>
        {parser(note.body)}
      </div>
      <div className="note-actions" style={{ marginTop: 24 }}>
        <button className="btn btn-delete" onClick={() => { onDelete(note.id); navigate("/"); }}>
          Hapus
        </button>
        <button
          className={`btn ${note.archived ? "btn-unarchive" : "btn-archive"}`}
          onClick={() => { onToggleArchive(note.id); navigate(note.archived ? "/arsip" : "/"); }}
        >
          {note.archived ? "Batal Arsip" : "Arsipkan"}
        </button>
      </div>
    </div>
  );
}

export default NotesDetail;
