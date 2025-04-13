import React, { useState } from 'react';
import '../style/header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleMenu = () => {
    setNavOpen(!navOpen);
  };

  const closeMenu = () => {
    setNavOpen(false);
  };

  return (
    <header className='header'>
      <div className='header__logo'>
        <NavLink to='/' onClick={closeMenu}>Vishesh Verma</NavLink>
      </div>

      <nav className={`header__nav ${navOpen ? 'active' : ''}`}>
        <NavLink to='/' className='header__link' onClick={closeMenu}>Home</NavLink>
        <NavLink to='/about' className='header__link' onClick={closeMenu}>About Me</NavLink>
      </nav>

      <div className='header__toggle' id='headerToggle' onClick={toggleMenu}>
        {navOpen ? '✖' : '☰'}
      </div>
    </header>
  );
};

export default Header;
