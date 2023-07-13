import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// passing in two props below. For the proile prop,
// the user will click on the profile image and 
// it should lead them directly to their profile page

const Header = ({ pageTitle, profileImg }) => {
  return (
    <header className="flex justify-between items-center p-5 bg-green-500 text-white">
      <h3 className="text-lg">Okay Bloomer</h3>
      <h1 className="text-xl">{pageTitle}</h1>
      <Link href="/profile">
          <div className="w-8 h-8 relative">
            <Image src={profileImg} layout="fill" className="rounded-full" />
          </div>
      </Link>
    </header>
  );
};

export default Header;
