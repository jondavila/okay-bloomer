import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// passing in two props below. For the proile prop,
// the user will click on the profile image and 
// it should lead them directly to their profile page

const Header = ({ pageTitle, profileImg }) => {
  return (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item">
          <h3 className="title is-4 has-text-white">Okay Bloomer</h3>
        </a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item">
            <h1 className="title is-4">{pageTitle}</h1>
          </div>
        </div>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <Link href="/profile">
            <div className="w-8 h-8 relative">
              <Image src={profileImg} layout="fill" className="rounded-full" />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
