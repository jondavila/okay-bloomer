import React from 'react';
import Link from 'next/link';
import styles from '../header.module.css';
import 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = ({ pageTitle }) => {

  return (
    <nav className={`navbar ${styles.myNavbar} animate__animated animate__fadeIn`} role="navigation" aria-label="main navigation" style={{ animationDelay: '0.2s' }}>
      <div className={`${styles.myNavbarItem}`}>
        <Link href="/">
          <div>
            <img src="/logo.jpg" alt="Logo" style={{ display: 'inline', width: '30px', height: '30px', marginRight: '10px', fontFamily: 'Preahvihear, sans-serif' }} />
            <h3 style={{ display: 'inline', color: 'white' }} className="title is-4">Okay Bloomer</h3>
          </div>
        </Link>
      </div>

      <div className={`${styles.myNavbarItem} ${styles.pageTitle}`}>
        <h1 style={{ color: 'white', fontSize: '1.5em' }} className="title is-4">{pageTitle}</h1>
      </div>

      <div className={`${styles.myNavbarItem} ${styles.dropdownContainer}`}>
        <div className={`dropdown is-right is-hoverable`}>
          <div className="dropdown-trigger">
            <button className={`button ${styles.menuButton}`} aria-haspopup="true" aria-controls="dropdown-menu">
              <span className="icon">
                <FontAwesomeIcon icon={faBars} style={{ color: 'white' }} /> {/* this is the hamburger icon */}
              </span>
            </button>
          </div>
          <div className="dropdown-menu" id="dropdown-menu" role="menu">
            <div className="dropdown-content">
              <Link href="/profile">
                <p className="dropdown-item">Profile</p>
              </Link>
              <Link href="/sanctuary">
                <p className="dropdown-item">Sanctuary</p>
              </Link>
              <Link href="/">
                <p className="dropdown-item">Search</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
