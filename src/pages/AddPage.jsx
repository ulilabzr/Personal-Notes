import React, { useContext } from "react";
import AddNoteForm from "../components/AddNoteForm";
import NotesContext from "../contexts/NotesContext";
import { useNavigate } from "react-router-dom";

function AddPage() {
  const { onAddNote } = useContext(NotesContext);
  const navigate = useNavigate();

  const handleAddNote = (note) => {
    onAddNote(note);
    navigate("/");
  };

  return (
    <div className="note-app">
      <div className="note-app__header">
        <h1>Tambah Catatan Baru</h1>
      </div>
      <AddNoteForm onAddNote={handleAddNote} />
    </div>
  );
}

export default AddPage;