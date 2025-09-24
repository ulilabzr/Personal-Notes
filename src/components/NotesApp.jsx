import React from "react";
import { getInitialData, addNote } from "../utils";
import NotesList from "./NotesList";
import NotesInput from "./NotesInput";

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
    this.setState(
      prevState({
        notes: prevState.notes.filter((note) => note.id !== id),
      })
    );
  };

  // Handler untuk toggle arsip
  toggleArchive = (id) => {
    this.setState(
      prevState({
        notes: prevState.notes.map((note) =>
          note.id === id ? { ...note, archived: !note.archived } : note
        ),
      })
    );
  };

  render() {
    return (
      <div className="app">
        <header className="header">
          <h1>📝 Catatan Pribadi</h1>
          <p>Kelola catatan Anda dengan mudah dan terorganisir</p>
        </header>

        <SearchBar
          searchKeyword={this.state.searchKeyword}
          onSearchChange={(searchKeyword) => this.setState({ searchKeyword })}
        />

        <AddNoteForm onAddNote={this.addNote} />

        <NotesList
          title="Catatan Aktif"
          notes={this.activeNotes}
          onDelete={this.deleteNote}
          onToggleArchive={this.toggleArchive}
          icon="fas fa-sticky-note"
        />

        <NotesList
          title="Catatan Arsip"
          notes={this.archivedNotes}
          onDelete={this.deleteNote}
          onToggleArchive={this.toggleArchive}
          icon="fas fa-archive"
          isArchived={true}
        />
      </div>
    );
  }
}

export default NotesApp;
