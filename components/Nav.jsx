'use client';

import Link from 'next/link';
import React from 'react';
import SignInButton from './SignInButton';

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      {/* <Link href="/" className="flex gap-2 flex-center" /> */}
      <p className="flex  logo_text">
        <Link href="/">SCOUTS</Link>
      </p>
      <p className="nav_p ">The One Stop Solution For HR'S!!</p>
      <div className="sm:flex hidden">
        <SignInButton />
      </div>
    </nav>
  );
};

export default Nav;
