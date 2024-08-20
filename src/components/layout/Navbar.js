import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../assets/svg/aia-logo-red.svg'; 

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 100); // เลื่อนลงเกิน 100px จะกลายเป็น sticky
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar ${isSticky ? 'sticky sticky-active' : ''}`}>
        <div className="navbar-left">
          <span className="navbar-text">ดาระวี บุญสิริเวทย์</span>
          <span className="navbar-text">095 119 2491 | darawee.pr@gmail.com</span>
        </div>
        <div className="navbar-right">
          <ul className="navbar-menu">
            <li>
              <Link to="/" className="navbar-link">หน้าแรก</Link>
            </li>
            <li>
              <Link to="/promotion" className="navbar-link">ผลิตภัณฑ์</Link>
            </li>
            <li>
              <Link to="/contract" className="navbar-link">ติดต่อตัวแทน</Link>
            </li>
          </ul>
          <img src={Logo} alt="Logo" className="navbar-logo" />
        </div>

        <button className="navbar-menu-toggle" onClick={toggleMenu}>
          &#9776;
        </button>

        <div className={`navbar-menu-active ${menuOpen ? 'open' : ''}`}>
          <button className="navbar-close-button" onClick={closeMenu}>
            &times;
          </button>
          <ul className="navbar-menu">
            <li>
              <Link to="/" className="navbar-link" onClick={closeMenu}>หน้าแรก</Link>
            </li>
            <li>
              <Link to="/promotion" className="navbar-link" onClick={closeMenu}>ผลิตภัณฑ์</Link>
            </li>
            <li>
              <Link to="/contract" className="navbar-link" onClick={closeMenu}>ติดต่อตัวแทน</Link>
            </li>
          </ul>
        </div>
      </nav>

      {menuOpen && <div className="overlay open" onClick={closeMenu}></div>}
    </>
  );
}

export default Navbar;
