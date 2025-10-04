import React from "react";
import PropTypes, { func } from 'prop-types';

function SearchBar({ keyword, keywordChange }) {
  return (
    <div><input type="text" placeholder="Cari Berdasarkan Judul" value={keyword} onChange={(event)=> keywordChange(event.target.value)}/></div>
  )
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;