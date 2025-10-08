import React, { useContext } from "react";
import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import AddPage from "./pages/AddPage";
import ArchivePage from "./pages/ArchivePage";
import DetailPage from "./components/NotesDetail";
import Navigation from "./components/Navigation";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import { NotesProvider } from "./contexts/NotesContext";
import { AuthProvider } from "./contexts/AuthContext";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AuthContext from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";


function PrivateRoute({ children }) {
  const { user, initializing } = useContext(AuthContext);
  if (initializing) return <div className="loading">Loading...</div>;
  return user ? children : <Navigate to="/login" replace />;
}

function NotesApp() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <NotesProvider>
          <div>
            <Navigation />
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<PrivateRoute><HomePage /></PrivateRoute>} />
              <Route path='archives' element={<PrivateRoute><ArchivePage /></PrivateRoute>} />
              <Route path='notes/:id' element={<PrivateRoute><DetailPage /></PrivateRoute>} />
              <Route path='new' element={<PrivateRoute><AddPage /></PrivateRoute>} />
              <Route path='login' element={<LoginPage />} />
              <Route path='register' element={<RegisterPage />} />
              <Route path='*' element={<NotFoundPage />} />
            </Route>
          </Routes>
          </div>
        </NotesProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default NotesApp;
