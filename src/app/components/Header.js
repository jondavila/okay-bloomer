import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../header.module.css';

const Header = ({ pageTitle, profileImg }) => {
  return (
    <nav className={`navbar ${styles.myNavbar}`} role="navigation" aria-label="main navigation">
      <div className={`${styles.myNavbarItem}`}>
        <Link href="/">
          <h3 style={{ color: 'white' }} className="title is-4">Okay Bloomer</h3>
        </Link>
      </div>

      <div className={`${styles.myNavbarItem} ${styles.pageTitle}`}>
        <h1 style={{ color: 'white', fontSize: '1.5em' }} className="title is-4">{pageTitle}</h1>
      </div>

      <div className={`${styles.myNavbarItem}`}>
        <Link href="/profile">
          <Image src={profileImg} width={50} height={50} className="rounded-full" />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
