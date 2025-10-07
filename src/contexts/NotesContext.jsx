import React, { createContext, useState } from "react";
import { getAllNotes } from '../utils/local-data';

const NotesContext = createContext();

export function NotesProvider({ children }) {
  const [notes, setNotes] = useState(getAllNotes());
  const [searchKeyword, setSearchKeyword] = useState("");

  const onAddNote = ({ title, body }) => {
    setNotes((prev) => [
      ...prev,
      {
        id: +new Date(),
        title,
        body,
        archived: false,
        createdAt: new Date().toISOString(),
      },
    ]);
  };

  const onDelete = (id) => setNotes((prev) => prev.filter((n) => n.id !== id));
  const onToggleArchive = (id) =>
    setNotes((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, archived: !n.archived } : n
      )
    );

  return (
    <NotesContext.Provider
      value={{
        notes,
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
