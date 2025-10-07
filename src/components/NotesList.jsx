import React from "react";
import parser from "html-react-parser";
import { showFormattedDate } from "../utils";
import NotesContext from "../contexts/NotesContext";

function NotesList ({ title, isArchived,notes, onDelete, onToggleArchive }) {
  
  return(
    <div className="notes-list">
      <h2>{title}</h2>
      {notes.length === 0 ? (
        <p className="notes-list__empty">Tidak ada catatan</p>
      ) : (
        <div className="notes-list__content">
          {notes.map((note) => (
            <div key={note.id} className="note-item">
              <div className="note-item__content">
                <h3>{note.title}</h3>
                <p className="note-item__date">
                  {showFormattedDate(note.createdAt)}
                </p>
                <p className="note-item__body">{parser(note.body)}</p>
              </div>
              <div className="note-item__action">
                <button
                  className="note-item__delete-button"
                  onClick={() => onDelete(note.id)}
                > 
                  Hapus
                </button>
                <button
                  className="note-item__archive-button"
                  onClick={() => onToggleArchive(note.id)}
                >
                  {isArchived ? "Pindahkan" : "Arsipkan"}
                </button>
              </div>
            </div>  
          ))}
        </div>
      )}
    </div>
  );
}

export default NotesList;
