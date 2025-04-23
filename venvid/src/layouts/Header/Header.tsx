import React, { useState } from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm ${styles.header}`}>
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">
          <h2>
          VenVid
          </h2>
        </a>

        {/* Hamburger */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-controls="navbarSupportedContent"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible section */}
        <div
          className={`collapse navbar-collapse ${expanded ? 'show' : ''} ${styles.collapse}`}
          id="navbarSupportedContent"
        >
          {/* Center: Search bar */}
          <div className={`mx-auto my-2 my-lg-0 ${styles.searchContainer}`}>
            <input
              type="search"
              className={`form-control ${styles.searchInput}`}
              placeholder="Search videos..."
              aria-label="Search"
            />
          </div>

          {/* Right: Sign Up button */}
          <div className="d-flex justify-content-end mt-2 mt-lg-0 ms-lg-3">
            <button className="btn btn-outline-primary w-100 w-lg-auto">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
