import React, { useContext, useState } from "react";
import useInput from "../hooks/useInput";
import AuthContext from "../contexts/AuthContext";
import LanguageContext from "../contexts/LanguageContext";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const { t } = useContext(LanguageContext);
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login({ email, password });
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="note-app">
      <div className="note-app__header">
        <h1>{t('login')}</h1>
      </div>
      <div className="add-form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="email">{t('email')}</label>
            <input className="form-input" id="email" type="email" value={email} onChange={onEmailChange} required />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">{t('password')}</label>
            <input className="form-input" id="password" type="password" value={password} onChange={onPasswordChange} required />
          </div>

          {error && <div className="empty-title form-error">{error}</div>}
          <button className="btn" type="submit" disabled={loading}>{loading ? t('loading') : t('login')}</button>
        </form>
        <p className="form-note">{t('noAccount')}? <Link to="/register">{t('register')}</Link></p>
      </div>
    </div>
  );
}

export default LoginPage;


