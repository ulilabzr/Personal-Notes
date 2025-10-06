import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AddPage from "../pages/AddPage";
import ArsipPage from "../pages/ArchivePage";
import DetailPage from "../pages/DetailPage";
import Navigation from "./Navigation";
import NotFoundWrapper from "../pages/NotFoundPage";
import HomePageWrapper from "../pages/HomePage";

function NotesApp() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePageWrapper />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/arsip" element={<ArsipPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="*" element={<NotFoundWrapper />} />
      </Routes>
    </div>
  );
}

export default NotesApp;
