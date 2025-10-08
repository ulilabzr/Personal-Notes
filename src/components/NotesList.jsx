import React, { useContext } from "react";
import parser from "html-react-parser";
import { showFormattedDate } from "../utils";
import { useNavigate } from "react-router-dom";
import LanguageContext from "../contexts/LanguageContext";

function NotesList({ notes, onDelete, onToggleArchive, isArchived }) {
  const navigate = useNavigate();
  const { t } = useContext(LanguageContext);

  return (
    <div className="notes-list">
      {notes.length === 0 ? (
        <p className="notes-list__empty">{t('noNotes')}</p>
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
                  <i className="fa-solid fa-trash"></i> {t('delete') || 'Delete'}
                </button>

                <button
                  className="note-item__archive-button"
                  onClick={() => onToggleArchive(note.id)}
                >
                  {isArchived ? (<> <i className="fa-solid fa-box-archive"></i>{t('unarchive') || 'Move'}</>) : (
            <>
              <i className="fa-solid fa-box-archive"></i> {t('archive')}
            </>
          )}
                </button>
                <button
                  className="note-item__detail-button"
                  onClick={() => navigate(`/notes/${note.id}`)}
                ><i className="fa-solid fa-circle-info"></i>
                   {t('detail')}
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
