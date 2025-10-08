import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import ThemeContext from "../contexts/ThemeContext";

function Navigation() {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav className="navigation">
      <ul>
        {user && (
          <>
            <li>
              <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "") }>
                <i className="fa-solid fa-house"></i> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/archives" className={({ isActive }) => (isActive ? "active" : "") }>
                <i className="fa-solid fa-box-archive"></i> Arsip
              </NavLink>
            </li>
          </>
        )}
        <li>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? '🌞' : '🌙'}
          </button>
        </li>
        {user ? (
          <li>
            <button className="logout-button" onClick={() => { logout(); navigate('/login'); }}><i className="fa-solid fa-right-from-bracket"></i>
              Logout ({user.name})
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
}

export default Navigation;
