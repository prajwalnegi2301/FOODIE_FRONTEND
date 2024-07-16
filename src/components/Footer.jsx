import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="text-sm">&copy; {new Date().getFullYear()} Restaurant Name. All rights reserved.</p>
        </div>
        <div>
          <a href="https://www.facebook.com" className="text-white mr-3 hover:text-gray-300"><FaFacebook /></a>
          <a href="https://www.twitter.com" className="text-white mr-3 hover:text-gray-300"><FaTwitter /></a>
          <a href="https://www.instagram.com" className="text-white hover:text-gray-300"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
