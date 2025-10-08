import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import AddPage from "./pages/AddPage";
import ArchivePage from "./pages/ArchivePage";
import DetailPage from "./components/NotesDetail";
import Navigation from "./components/Navigation";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import { NotesProvider } from "./contexts/NotesContext";

function NotesApp() {
  return (
    <NotesProvider>
      <div>
        <Navigation />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='archives' element={<ArchivePage />} />
          <Route path='notes/:id' element={<DetailPage />} />
          <Route path='new' element={<AddPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
      </div>
    </NotesProvider>
  );
}

export default NotesApp;
