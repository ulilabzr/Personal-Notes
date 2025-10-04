import React from "react";
import NotesList from "../components/NotesList";
import SearchBar from "../components/SearchBar";
import { useSearchParams } from "react-router-dom";
import { getInitialData, deleteNote, archiveNote, unarchiveNote } from "../utils/local-data";

function HomePageWrapper() {

    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get("keyword") || "";

    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }

    return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />;
}


class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
        };
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onToggleArchiveHandler = this.onToggleArchiveHandler.bind(this);
    } 

    onDeleteHandler(id) {
        this.setState((prevState) => {
            return {
                notes: deleteNote(id, prevState.notes),
            };
        });
    }

    onToggleArchiveHandler(id) {
        this.setState((prevState) => {
            const note = prevState.notes.find((note) => note.id === id);
            if (note.archived) {
                return{
                    notes: unarchiveNote(id, prevState.notes),
                };
            } else {
                return{
                    notes: archiveNote(id, prevState.notes),
                };
            }
        });
    }

    render(){
        return(
            <div className="home-page">
                <NotesList
                    title="Catatan Aktif"
                    notes={this.state.notes.filter((notes)=> !notes.archived)}
                    onDelete={this.onDeleteHandler}
                    onToggleArchive={this.onToggleArchiveHandler}
                    isArchived={false}
                    />
                <NotesList
                    title="Arsip"
                    notes={this.state.notes.filter((notes)=> notes.archived)}
                    onDelete={this.onDeleteHandler}
                    onToggleArchive={this.onToggleArchiveHandler}
                    isArchived={true}
                />
            </div>
        );
    
    }
}

export default HomePageWrapper;