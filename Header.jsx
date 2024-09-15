import React, { useState } from 'react';
import { FaCalendarAlt, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isHovered, setIsHovered] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = ['Home', 'Events', 'About', 'Contact'];

  return (
    <header className="bg-purple-600 text-white py-4 px-6 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <FaCalendarAlt className="text-2xl mr-2" />
          <h1 className="text-xl font-bold">Event Management System</h1>
        </div>
        <nav className="hidden md:flex space-x-4">
          {links.map((link, index) => (
            <a
              key={index}
              href="#"
              className="relative group"
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <span className="transition-colors duration-300 group-hover:text-purple-200">
                {link}
              </span>
              <span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-200 transition-all duration-300 ${
                  isHovered === index ? 'w-full' : 'w-0'
                }`}
              />
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4"
          >
            <div className="flex flex-col items-center space-y-4">
              {links.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-xl font-semibold hover:text-purple-200 transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;