'use client';

import Link from 'next/link';
import React from 'react';
import SignInButton from './SignInButton';

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center" />
      <p className="logo_text">SCOUTS</p>

      <div className="sm:flex hidden">
        {/* {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5 ">
            <Link href="/client-search" className="black_btn">
              Search Clients
            </Link>

            <button type="button" className="outline_btn">
              Sign Out
            </button>
          </div>
        ) : (
          <></>
        )} */}
        <SignInButton />
      </div>
    </nav>
  );
};

export default Nav;
