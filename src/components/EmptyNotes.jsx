import React from "react";

function EmptyNotes({ isArchived }) {
  return (
    <div className="empty-state">
      <div className="empty-icon">
        <i
          className={`fas ${isArchived ? "fa-archive" : "fa-sticky-note"}`}
        ></i>
      </div>
      <h3 className="empty-title">
        {isArchived ? "Tidak ada catatan yang diarsipkan" : "Tidak ada catatan"}
      </h3>
      <p>
        {isArchived
          ? "Catatan yang diarsipkan akan muncul di sini"
          : "Mulai menulis catatan pertama Anda!"}
      </p>
    </div>
  );
}

export default EmptyNotes;
