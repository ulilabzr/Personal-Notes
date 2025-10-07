import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function NewList() {
  return (
    <div className="new-list">
      <Link to="/add" className="button-add" type="button" title="Tambah">
        Tambah Catatan Baru
      </Link>
    </div>
  );
}
NewList.propTypes = {
};

export default NewList;