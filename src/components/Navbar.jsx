import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <div className="logo">
        Career<span>Connect</span>
      </div>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>

        <Link to="/jobs" onClick={closeMenu}>
          Jobs
        </Link>

        <Link to="/dashboard" onClick={closeMenu}>
          Dashboard
        </Link>

        <Link
          to="/login"
          className="login-btn"
          onClick={closeMenu}
        >
          Login
        </Link>

        <Link
          to="/register"
          className="register-btn"
          onClick={closeMenu}
        >
          Register
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;