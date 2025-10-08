import React from "react";
import PropTypes, { func } from 'prop-types';

function SearchBar({ keyword, keywordChange }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const params =searchParams.get('q') || '';
  
  return (
    <div className="search-bar">
      <input
        type="search"
        className="search-bar__input"
        placeholder="Cari catatan..."
        value={keyword}
        onChange={(e) => setSearchParams({ q: e.target.value })}
      />
    </div>
  )
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;