import React, { useState } from "react";
import NotesDetail from "../components/NotesDetail";
import { useParams, useNavigate } from "react-router-dom";
import { getNote, deleteNote } from "../utils/local-data";

function NotFoundPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [note] = useState(getNote(id));

    const onDeleteHandler = () => {
        deleteNote(id);
        navigate("/");
    };

    if (note !== undefined) {
        return (
            <div className="detail-page">
                <NotesDetail note={note} onDelete={onDeleteHandler} />
            </div>
        );
    }
    return (
        <div className="empty-state">
            <div className="empty-title">404 - Halaman tidak ditemukan</div>
        </div>
    );
}

export default NotFoundPage;