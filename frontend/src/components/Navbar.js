import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', background: '#282c34', color: 'white', display: 'flex', gap: '20px' }}>
      <h2 style={{ margin: 0 }}>TalentLink</h2>
      <Link to="/" style={{ color: 'white' }}>Dashboard</Link>
      <Link to="/profile" style={{ color: 'white' }}>My Portfolio</Link>
      <Link to="/bids" style={{ color: 'white' }}>Project Bids</Link>
    </nav>
  );
};

export default Navbar;