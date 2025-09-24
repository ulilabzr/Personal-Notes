function SearchBar({ searchKeyword, onSearchChange }) {
  return (
    <div className="search-container">
      <i className="fas fa-search search-icon"></i>
      <input
        type="text"
        className="search-input"
        placeholder="Cari catatan berdasarkan judul..."
        value={searchKeyword}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
