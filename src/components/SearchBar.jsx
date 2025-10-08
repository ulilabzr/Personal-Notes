import React, { useCallback, useContext } from "react";
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import LanguageContext from "../contexts/LanguageContext";

function SearchBar({ keyword, keywordChange }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { t } = useContext(LanguageContext);

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
        placeholder={t('searchPlaceholder')}
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