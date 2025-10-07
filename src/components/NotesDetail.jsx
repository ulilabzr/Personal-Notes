import React from "react";
import parser from "html-react-parser";
import { useParams, useNavigate } from "react-router-dom";
import {
  getNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
} from "../utils/local-data";

function NotesDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = getNote(id);

  if (!note) {
    return <div className="empty-state">Catatan tidak ditemukan</div>;
  }

  const handleDelete = () => {
    deleteNote(id);
    navigate("/");
  };

  const handleToggleArchive = () => {
    if (note.archived) {
      unarchiveNote(id);
      navigate("/");
    } else {
      archiveNote(id);
      navigate("/arsip");
    }
  };

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
        <button className="btn btn-delete" onClick={handleDelete}>
          Hapus
        </button>
        <button
          className={`btn ${note.archived ? "btn-unarchive" : "btn-archive"}`}
          onClick={handleToggleArchive}
        >
          {note.archived ? "Batal Arsip" : "Arsipkan"}
        </button>
      </div>
    </div>
  );
}

export default NotesDetail;
