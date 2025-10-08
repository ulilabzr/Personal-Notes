import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import ThemeContext from "../contexts/ThemeContext";
import LanguageContext from "../contexts/LanguageContext";

function Navigation() {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { t, toggleLanguage, lang } = useContext(LanguageContext);

  return (
    <nav className="navigation">
      <div className="nav-left">
        <ul>
          {user && (
            <>
              <li>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <i className="fa-solid fa-house"></i> {t("home")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/archives"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <i className="fa-solid fa-box-archive"></i> {t("archive")}
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>

      <div className="nav-mode">
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌞" : "🌙"}
        </button>

        <button className="translate-toggle" onClick={toggleLanguage}>
          {lang === "id" ? "ID" : "EN"}
        </button>

        {user && (
          <button
            className="logout-button"
            onClick={() => {
              logout();
              navigate("/login");
            }}
          >
            <i className="fa-solid fa-right-from-bracket"></i> {t("logout")}
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
