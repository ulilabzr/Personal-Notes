import React from "react";

class SearchBar extends React.Component {
  render() {
    const { keyword, keywordChange } = this.props;

    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Cari catatan berdasarkan judul..."
          value={keyword}
          onChange={(event) => keywordChange(event.target.value)}
        />
      </div>
    );
  }
}

export default SearchBar;
