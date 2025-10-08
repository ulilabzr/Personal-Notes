import React, { useContext, useState } from "react";
import useInput from "../hooks/useInput";
import AuthContext from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();
  const { register } = useContext(AuthContext);
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [confirm, onConfirmChange] = useInput("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (confirm && password !== confirm) {
      setError("Konfirmasi password tidak cocok");
      return;
    }
    setLoading(true);
    try {
      await register({ name, email, password });
      navigate("/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="note-app">
      <div className="note-app__header">
        <h1>Daftar</h1>
      </div>
      <div className="add-form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="name">Nama</label>
            <input className="form-input" id="name" type="text" value={name} onChange={onNameChange} required />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input className="form-input" id="email" type="email" value={email} onChange={onEmailChange} required />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">Password</label>
            <input className="form-input" id="password" type="password" value={password} onChange={onPasswordChange} required />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="confirm">Konfirmasi Password</label>
            <input className="form-input" id="confirm" type="password" value={confirm} onChange={onConfirmChange} />
          </div>

          {error && <div className="empty-title form-error">{error}</div>}
          <button className="btn" type="submit" disabled={loading}>{loading ? 'Loading...' : 'Register'}</button>
        </form>
        <p className="form-note">Sudah punya akun? <Link to="/login">Masuk</Link></p>
      </div>
    </div>
  );
}

export default RegisterPage;


