import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AddPage from "../pages/AddPage";
import ArsipPage from "../pages/ArchivePage";
import DetailPage from "../pages/DetailPage";
import Navigation from "./Navigation";

function NotesApp() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/arsip" element={<ArsipPage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default NotesApp;
