import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add">Add</Link></li>
        <li><Link to="/arsip">Arsip</Link></li>
        <li><Link to="/detail">Detail</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;