import React, { useCallback } from "react";
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';

function SearchBar({ keyword, keywordChange }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const onChange = useCallback((e) => {
    const value = e.target.value;
    keywordChange(value);
    setSearchParams(value ? { q: value } : {});
  }, [keywordChange, setSearchParams]);

  return (
    <div className="search-bar">
      <input
        type="search"
        className="search-bar__input"
        placeholder="Cari catatan..."
        value={keyword}
        onChange={onChange}
      />
    </div>
  )
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;