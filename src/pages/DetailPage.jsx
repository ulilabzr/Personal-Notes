import React, { useState } from "react";
import NotesDetail from "../components/NotesDetail";
import { useParams, useNavigate } from "react-router-dom";
import { getNote, deleteNote } from "../utils/local-data";

function DetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [note] = useState(getNote(id));

    const onDeleteHandler = () => {
        deleteNote(id);
        navigate("/");
    };

    if (!note) {
        return (
            <div className="detail-page">
                <div className="empty-state">
                    <div className="empty-title">Catatan tidak ditemukan</div>
                </div>
            </div>
        );
    }

    return (
        <div className="detail-page">
            <NotesDetail note={note} onDelete={onDeleteHandler} />
        </div>
    );
}

export default DetailPage;