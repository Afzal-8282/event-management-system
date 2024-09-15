import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-4 mb-4">
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">
              <FaLinkedin size={20} />
            </a>
          </div>
          <div className="text-sm text-center">
            <p>&copy; 2023 Event Management System. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;