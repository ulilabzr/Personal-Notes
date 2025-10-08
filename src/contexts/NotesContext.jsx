import React, { createContext, useCallback, useEffect, useState } from "react";
import { addNote as apiAddNote, archiveNote as apiArchiveNote, deleteNote as apiDeleteNote, getArchivedNotes, getNotes as apiGetNotes, unarchiveNote as apiUnarchiveNote } from '../utils/api';

const NotesContext = createContext();

export function NotesProvider({ children }) {
  const [notes, setNotes] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [loading, setLoading] = useState(true);

  const refreshNotes = useCallback(async () => {
    setLoading(true);
    try {
      const [active, archived] = await Promise.all([
        apiGetNotes(),
        getArchivedNotes(),
      ]);
      setNotes([...active, ...archived]);
    } catch (e) {
      setNotes([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshNotes();
  }, [refreshNotes]);

  const onAddNote = async ({ title, body }) => {
    const newNote = await apiAddNote({ title, body });
    setNotes((prev) => [newNote, ...prev]);
  };

  const onDelete = async (id) => {
    await apiDeleteNote(id);
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };
  const onToggleArchive = async (id) => {
    const target = notes.find((n) => n.id === id);
    if (!target) return;
    if (target.archived) await apiUnarchiveNote(id);
    else await apiArchiveNote(id);
    setNotes((prev) => prev.map((n) => (n.id === id ? { ...n, archived: !n.archived } : n)));
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        loading,
        refreshNotes,
        onAddNote,
        onDelete,
        onToggleArchive,
        searchKeyword,
        setSearchKeyword,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}

export default NotesContext;
