import React from "react";
import NotesInput from "../components/NotesInput";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/local-data";

function AddPage() {
    const navigate = useNavigate();

    function onAddNoteHandler(note){
        addNote(note);
        navigate('/');
    }

    return(
        <div className="add-page">
            <h2>Tambah Catatan</h2>
            <NotesInput addNote={onAddNoteHandler} />
        </div>
    );
}