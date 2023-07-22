import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../header.module.css';
import 'animate.css';

const Header = ({ pageTitle, profileImg }) => {
  return (
    <nav className={`navbar ${styles.myNavbar} animate__animated animate__fadeIn`} role="navigation" aria-label="main navigation" style={{ animationDelay: '0.2s' }}>
      <div className={`${styles.myNavbarItem}`}>
        <Link href="/">
          <img src="./logo.jpg" alt="Logo" style={{ display: 'inline', width: '30px', height: '30px', marginRight: '10px', fontFamily: 'Preahvihear, sans-serif' }} />
          <h3 style={{ display: 'inline', color: 'white' }} className="title is-4">Okay Bloomer</h3>
        </Link>
      </div>

      <div className={`${styles.myNavbarItem} ${styles.pageTitle}`}>
        <h1 style={{ color: 'white', fontSize: '1.5em' }} className="title is-4">{pageTitle}</h1>
      </div>

      <div className={`${styles.myNavbarItem}`}>
        <Link href="/profile">
          <Image src={profileImg} width={50} height={50} className="rounded-full" alt='Profile Image' />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
