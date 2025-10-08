import React, { useEffect, useState } from "react";
import NotesDetail from "../components/NotesDetail";
import { useParams, useNavigate } from "react-router-dom";
import { getNote, deleteNote } from "../utils/api";

function DetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [note, setNote] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;
        (async () => {
            try {
                const data = await getNote(id);
                if (mounted) setNote(data);
            } finally {
                if (mounted) setLoading(false);
            }
        })();
        return () => { mounted = false; };
    }, [id]);

    const onDeleteHandler = async () => {
        await deleteNote(id);
        navigate("/");
    };

    if (loading) {
        return <div className="detail-page"><div className="empty-state"><div className="empty-title">Loading...</div></div></div>;
    }

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