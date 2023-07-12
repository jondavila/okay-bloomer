import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = ({ pageTitle, profileImg }) => {
  return (
    <header className="level p-3 has-background-success has-text-white">
      <div className="level-left">
        <h3 className="title is-5 has-text-white">Okay Bloomer</h3>
      </div>
      <div className="level-item">
        <h1 className="title is-2">{pageTitle}</h1>
      </div>
      <div className="level-right">
        <Link href="/profile">
          <div className="w-25 h-25 position-relative">
            <Image src={profileImg} layout="fill" className="is-rounded" />
            <p className="is-sr-only">Profile</p>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
