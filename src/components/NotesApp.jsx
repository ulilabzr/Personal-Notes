import React from "react";
import { getInitialData, addNote } from "../utils";
import AddNoteForm from "./AddNoteForm";
import NotesList from "./NotesList";
import SearchBar from "./SearchBar";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchKeyword: "",
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  // Filter catatan berdasarkan pencarian
  get filteredNotes() {
    const { notes, searchKeyword } = this.state;
    if (!searchKeyword.trim()) {
      return notes;
    }
    return notes.filter((note) =>
      note.title.toLowerCase().includes(searchKeyword.toLowerCase())
    );
  }

  // Pisahkan catatan aktif dan arsip
  get activeNotes() {
    return this.filteredNotes.filter((note) => !note.archived);
  }
  get archivedNotes() {
    return this.filteredNotes.filter((note) => note.archived);
  }

  // Handler untuk menambah catatan
  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [...prevState.notes, addNote({ title, body })],
      };
    });
  }

  // Handler untuk menghapus catatan
  deleteNote = (id) => {
    this.setState((prevState) => ({
      notes: prevState.notes.filter((note) => note.id !== id),
    }));
  };

  // Handler untuk toggle arsip
  toggleArchive = (id) => {
    this.setState((prevState) => ({
      notes: prevState.notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      ),
    }));
  };

  onKeywordChangeHandler = (keyword) => {
    this.setState(() => {
      return {
        searchKeyword: keyword,
      };
    });
  };

  render() {
    return (
      <div className="note-app">
        <div className="note-app__header">
          <h1>📝 Catatan Pribadi</h1>
          <p>Kelola catatan Anda dengan mudah dan terorganisir</p>
        </div>
        <div className="note-app__body">
          <SearchBar
            keyword={this.state.searchKeyword}
            keywordChange={this.onKeywordChangeHandler}
          />
          <AddNoteForm onAddNote={this.onAddNoteHandler} />
          <div className="notes-section">
            <NotesList
              title="Catatan Aktif"
              notes={this.activeNotes}
              onDelete={this.deleteNote}
              onToggleArchive={this.toggleArchive}
              isArchived={false}
            />
          </div>
          <div className="notes-section">
            <NotesList
              title="Arsip"
              notes={this.archivedNotes}
              onDelete={this.deleteNote}
              onToggleArchive={this.toggleArchive}
              isArchived={true}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default NotesApp;
