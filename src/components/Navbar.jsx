import React from 'react';
import { FaHome, FaUtensils, FaInfoCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="mr-2"><FaUtensils /></span>
          <span className="font-semibold">Restaurant Name</span>
        </div>
        <ul className="flex">
          <li className="mr-6">
            <a href="/" className="hover:text-gray-300 flex items-center">
              <span className="mr-2"><FaHome /></span>
              Home
            </a>
          </li>
          <li className="mr-6">
            <a href="/menu" className="hover:text-gray-300 flex items-center">
              <span className="mr-2"><FaUtensils /></span>
              Menu
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-300 flex items-center">
              <span className="mr-2"><FaInfoCircle /></span>
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
