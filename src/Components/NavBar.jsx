import React from 'react';
import Link from 'next/link';
import { FaBomb } from 'react-icons/fa';

function Navbar() {
  return (
    <nav>
      <div className="bg-white w-full mx-auto py-4 justify-evenly flex">
        <FaBomb className="text-purple-900 hover:text-pink-900 mr-4" size={25} />
        <div>
          <Link href="/Home">
            <button className="bg-transparent hover:bg-pink-800 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-900 hover:border-transparent rounded">
              Home
            </button>
          </Link>
        </div>
        <div>
          <Link href="/Support">
            <button className="bg-transparent hover:bg-pink-800 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-900 hover:border-transparent rounded">
              Support
            </button>
          </Link>
        </div>
        <div>
          <Link href="/Contact">
            <button className="bg-transparent hover:bg-pink-800 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-900 hover:border-transparent rounded">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
