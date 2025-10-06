import React from "react";
import { Route, Routes } from "react-router-dom";
import AddPage from "../pages/AddPage";
import ArchivePage from "../pages/ArchivePage";
import DetailPage from "../components/NotesDetail";
import Navigation from "./Navigation";
import NotFoundWrapper from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";
import { NotesProvider } from "../contexts/NotesContext";

function NotesApp() {
  return (
    <NotesProvider>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/arsip" element={<ArchivePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/*" element={<NotFoundWrapper />} />
      </Routes>
    </NotesProvider>
  );
}

export default NotesApp;
