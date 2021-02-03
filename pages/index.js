import React from 'react';
import Link from 'next/link';

const Home = () => (
  <div className="w-full lg:w-1/2 h-screen mx-auto flex flex-col items-center justify-center text-gray-800">
    <h1 className="mb-10 text-4xl lg:text-6xl font-semibold text-center">
      Next.js + PayPal Integration
    </h1>
    <div className="w-full px-4 flex flex-col md:flex-row items-center justify-center">
      <Link href="/single-payment">
        <a className="w-full md:w-1/2 flex flex-col items-center justify-center m-4 p-4 bg-gray-50 hover:bg-gray-700 hover:text-white border-4 border-gray-600 rounded-lg">
          <h2 className="mb-8 text-3xl font-semibold">Single payment</h2>
          <svg
            className="w-24 h-24"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
        </a>
      </Link>

      <Link href="/subscriptions">
        <a className="w-full md:w-1/2 flex flex-col items-center justify-center m-4 p-4 bg-gray-50 hover:bg-gray-700 hover:text-white border-4 border-gray-600 rounded-lg">
          <h2 className="mb-8 text-3xl font-semibold">Subscriptions</h2>
          <svg
            className="w-24 h-24"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
          </svg>
        </a>
      </Link>
    </div>
  </div>
);

export default Home;
