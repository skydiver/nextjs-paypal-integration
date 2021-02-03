import React from 'react';
import Link from 'next/link';

const NavBar = () => (
  <div className="fixed top-0 left-0 w-full h-16 px-8 flex items-center justify-center bg-black text-white">
    <div className="w-1/2 font-semibold">
      <Link href="/">
        <a>Next.js + PayPal Integration</a>
      </Link>
    </div>
    <div className="w-1/2 text-right space-x-3">
      <Link href="/single-payment">
        <a>Sigle payment</a>
      </Link>
      <Link href="/subscriptions">
        <a>Subscriptions</a>
      </Link>
    </div>
  </div>
);

export default NavBar;
