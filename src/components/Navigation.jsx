import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
            <i class="fa-solid fa-house"></i> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/archive" className={({ isActive }) => (isActive ? "active" : "")}>
            Archive
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
