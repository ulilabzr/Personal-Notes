import React from "react";
import parser from "html-react-parser";
import { showFormattedDate } from "../utils";
import { useNavigate } from "react-router-dom";

function NotesList({ notes, onDelete, onToggleArchive, isArchived }) {
  const navigate = useNavigate();

  return (
    <div className="notes-list">
      {notes.length === 0 ? (
        <p className="notes-list__empty">Tidak ada catatan</p>
      ) : (
        <div className="notes-list__content">
          {notes.map((note) => (
            <div key={note.id} className="note-item">
              <div className="note-item__content">
                <h3>{note.title}</h3>
                <p className="note-item__date">{showFormattedDate(note.createdAt)}</p>
                <p className="note-item__body">{parser(note.body)}</p>
              </div>

              <div className="note-item__action">
                <button
                  className="note-item__delete-button"
                  onClick={() => onDelete(note.id)}
                >
                  <i className="fa-solid fa-trash"></i> Hapus
                </button>

                <button
                  className="note-item__archive-button"
                  onClick={() => onToggleArchive(note.id)}
                >
                  {isArchived ? (<> <i className="fa-solid fa-box-archive"></i>Pindahkan</>) : (
            <>
              <i className="fa-solid fa-box-archive"></i> Arsip
            </>
          )}
                </button>

                {/* 🟢 Tombol Detail */}
                <button
                  className="note-item__detail-button"
                  onClick={() => navigate(`/detail/${note.id}`)}
                ><i className="fa-solid fa-circle-info"></i>
                   Detail
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
