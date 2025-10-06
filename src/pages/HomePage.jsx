import React, { useContext } from "react";
import NotesList from "../components/NotesList";
import NotesContext from "../contexts/NotesContext";
import SearchBar from "../components/SearchBar";

function HomePage() {
  const { notes, onDelete, onToggleArchive, searchKeyword, setSearchKeyword } = useContext(NotesContext);
  const filteredNotes = notes.filter(note =>
    !note.archived &&
    note.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <div className="note-app">
      <div className="note-app__header">
        <h1>Catatan Aktif</h1>
      </div>
      <SearchBar keyword={searchKeyword} keywordChange={setSearchKeyword} />
      <NotesList
        notes={filteredNotes}
        onDelete={onDelete}
        onToggleArchive={onToggleArchive}
        isArchived={false}
      />
    </div>
  );
}

export default HomePage;