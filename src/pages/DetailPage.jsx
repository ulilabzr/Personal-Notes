import React from "react";
import NotesDetail from "../components/NotesDetail";
import { useParams, useNavigate } from "react-router-dom";
import { getNote, deleteNote } from "../utils/local-data";


function DetailPage() {
    const { id } = useParams();
    const {} = useNavigate();

    function onDeleteHandler(note) {
        deleteNote(note);
        navigate("/");
    }
    return(
        <div className="detail-page">
            <NotesDetail note={getNote(id)} onDelete={onDeleteHandler} />
        </div>
    );
}   

export default DetailPage;