import React from "react";
import NotesDetail from "../components/NotesDetail";
import { useParams, useNavigate } from "react-router-dom";
import { getNote, deleteNote } from "../utils/local-data";

function NotFoundWrapper() {
    const { id } = useParams();
    const navigate = useNavigate();
    return <NotFoundPage id={id} navigate={navigate} />;
}

class NotFoundPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: getNote(this.props.id),
        };
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }
    onDeleteHandler() {
        deleteNote(this.props.id);
        this.props.navigate("/");
    }
    render() {
        if (this.state.note !== undefined) {
            return (
                <div className="detail-page">
                    <NotesDetail note={this.state.note} onDelete={this.onDeleteHandler} />
                </div>
            );
        }   
        return (
            <div className="not-found-page">
                <h2>404 - Halaman Tidak Ditemukan</h2>
                <p>Maaf, halaman yang Anda cari tidak ditemukan.</p>
                <button onClick={() => this.props.navigate(-1)}>Kembali</button>
            </div>
        );
    }
}

export default NotFoundWrapper;