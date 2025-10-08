import React, { useContext, useEffect } from "react";
import NotesList from "../components/NotesList";
import NotesContext from "../contexts/NotesContext";
import SearchBar from "../components/SearchBar";
import { useSearchParams } from "react-router-dom";
import LanguageContext from "../contexts/LanguageContext";

function ArchivePage() {
  const { notes, onDelete, onToggleArchive, setSearchKeyword } = useContext(NotesContext);
  const { t } = useContext(LanguageContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = (searchParams.get('q') || '').toLowerCase();

  useEffect(() => {
    setSearchKeyword(query);
  }, [query, setSearchKeyword]);

  const filteredNotes = notes.filter(note =>
    note.archived &&
    note.title.toLowerCase().includes(query)
  );

  return (
    <div className="note-app">
      <div className="note-app__header">
        <h1>{t('archive')}</h1>
      </div>
      <SearchBar keyword={query} keywordChange={(val) => {
        setSearchKeyword(val);
        setSearchParams(val ? { q: val } : {});
      }} />
      <NotesList
        notes={filteredNotes}
        onDelete={onDelete}
        onToggleArchive={onToggleArchive}
        isArchived={true}
      />
    </div>
  );
}

export default ArchivePage;