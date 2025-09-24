import React from "react";

class AddNoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      maxTitleLength: 50,
    };
  }

  handleTitleChange = (e) => {
    if (e.target.value.length <= this.state.maxTitleLength) {
      this.setState({ title: e.target.value });
    }
  };

  handleBodyChange = (e) => {
    this.setState({ body: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim() && this.state.body.trim()) {
      this.props.onAddNote({
        title: this.state.title.trim(),
        body: this.state.body.trim(),
      });
      this.setState({ title: "", body: "" });
    }
  };

  render() {
    const remainingChars = this.state.maxTitleLength - this.state.title.length;

    return (
      <form onSubmit={this.handleSubmit} className="add-note-form">
        <div className="form-group">
          <label className="form-label">
            Judul Catatan
            <span
              className={`char-limit ${remainingChars < 10 ? "warning" : ""}`}
            >
              ({remainingChars} karakter tersisa)
            </span>
          </label>
          <input
            type="text"
            className="form-input"
            placeholder="Masukkan judul catatan..."
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Isi Catatan</label>
          <textarea
            className="form-input form-textarea"
            placeholder="Tulis catatan Anda di sini..."
            value={this.state.body}
            onChange={this.handleBodyChange}
          />
        </div>
        <button
          type="submit"
          className="btn"
          disabled={!this.state.title.trim() || !this.state.body.trim()}
        >
          Tambah Catatan
        </button>
      </form>
    );
  }
}

export default AddNoteForm;
