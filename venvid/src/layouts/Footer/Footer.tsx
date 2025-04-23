import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={`bg-light py-3 mt-auto ${styles.footer}`}>
      <div className="container text-center">
        <small className="text-muted">
          © {new Date().getFullYear()} VenVid. All rights reserved.
        </small>
        <div className="mt-2">
          <a href="#" className="text-muted me-3">About</a>
          <a href="#" className="text-muted me-3">Privacy</a>
          <a href="#" className="text-muted">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
