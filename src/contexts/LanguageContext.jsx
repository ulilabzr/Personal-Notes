import React, { createContext, useCallback, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext();

const translations = {
  id: {
    home: 'Home',
    archive: 'Arsip',
    login: 'Masuk',
    logout: 'Keluar',
    register: 'Daftar',
    noAccount: 'Belum punya akun',
    alreadyAccount: 'Sudah punya akun',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Konfirmasi Password',
    name: 'Nama',
    noNotes: 'Tidak ada catatan',
    addNote: 'Tambah Catatan',
    detail: 'Detail',
    loading: 'Memuat...',
    delete: 'Hapus',
    unarchive: 'Pindahkan',
    newNotes: 'Tambahkan catatan baru',
    searchPlaceholder:"Cari catatan..."
  },
  en: {
    home: 'Home',
    archive: 'Archive',
    login: 'Login',
    logout: 'Logout',
    register: 'Register',
    noAccount: 'No account',
    alreadyAccount: 'Already have an account',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    name: 'Name',
    noNotes: 'No notes',
    addNote: 'Add Note',
    detail: 'Detail',
    loading: 'Loading...',
    delete: 'Delete',
    unarchive: 'Move',
    newNotes: 'Add new note',
    searchPlaceholder:"Find Notes..."
  }
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'id');

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const toggleLanguage = useCallback(() => {
    setLang((l) => (l === 'id' ? 'en' : 'id'));
  }, []);

  const t = useCallback((key) => translations[lang]?.[key] ?? key, [lang]);

  const value = useMemo(() => ({ lang, toggleLanguage, t }), [lang, toggleLanguage, t]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export default LanguageContext;


