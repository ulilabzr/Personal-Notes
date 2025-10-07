import React from "react";
import PropTypes, { func } from 'prop-types';

function SearchBar({ keyword, keywordChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-bar__input"
        placeholder="Cari catatan..."
        value={keyword}
        onChange={(e) => keywordChange(e.target.value)}
      />
    </div>
  )
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;