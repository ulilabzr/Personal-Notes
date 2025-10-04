import React from "react";
import NotesInput from "../components/NotesInput";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/local-data";

function AddPage() {
    const navigate = useNavigate();

    function onToggleArchiveHandler(note){
        archiveNote(note);
        navigate('/');
    }

    return(
        <div className="arsip-page">
            <h2>Tambah Catatan</h2>
            <NotesInput addNote={onToggleArchiveHandler} />
        </div>
    );
}