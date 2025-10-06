import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add">Add</Link></li>
        <li><Link to="/archive">Archive</Link></li>
        <li><Link to="/detail">Detail</Link></li>
        <li><Link to="/*">Not Found</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;