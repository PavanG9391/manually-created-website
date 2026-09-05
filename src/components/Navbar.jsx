import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      {/* The brand area is staying fixed while the menu state is changing. */}
      <div className="logo">
        <Link to="/" onClick={closeMenu}>
          <span>ScholarSphere</span>
        </Link>
      </div>

      {/* The navigation is being controlled by one menu toggle on small screens. */}
      <nav
        id="primary-navigation"
        className={menuOpen ? "nav-menu active" : "nav-menu"}
      >
        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>

        <NavLink to="/courses" onClick={closeMenu}>
          Courses
        </NavLink>

        <NavLink to="/student-services" onClick={closeMenu}>
          Student Services
        </NavLink>

        <NavLink to="/faq" onClick={closeMenu}>
          FAQ
        </NavLink>

        <NavLink to="/contact" onClick={closeMenu}>
          Contact
        </NavLink>
      </nav>

      {/* The button is toggling the menu without changing the page layout. */}
      <button
        className="menu-btn"
        aria-label="Toggle navigation menu"
        aria-controls="primary-navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  )
}

export default Navbar
