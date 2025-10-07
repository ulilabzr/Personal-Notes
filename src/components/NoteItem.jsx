import React from "react";
import { showFormattedDate } from "../utils";
import PropTypes from 'prop-types';

function NoteItem({ id, title, body, createdAt, onDelete }) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{showFormattedDate(createdAt)}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <div className="note-item__actions">
        <button className="btn btn-delete" onClick={() => onDelete(id)}>
          <i className="fa-solid fa-trash"></i>
        </button>

      </div>
    </div>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  onDelete: PropTypes.func, // optional, but recommended to be required if always used
};

export default NoteItem;