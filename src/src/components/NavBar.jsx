import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for the mobile menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Manage mobile menu state

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-20 flex justify-between items-center p-4 bg-white bg-opacity-90 shadow-md">
      <div className="flex items-center space-x-4">
        <a href="/" className="flex items-center">
          <img 
            src="src/assets/images/sea-1.png"
            alt="Logo" 
            className='h-12 w-12'
          />
        </a>
        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-black text-lg">
          <li><a href="#home" className="hover:text-blue-500">HOME</a></li>
          <li><a href="#shop" className="hover:text-blue-500">SHOP</a></li>
          <li><a href="#about" className="hover:text-blue-500">ABOUT</a></li>
          <li><a href="#new-collection" className="hover:text-blue-500">NEW COLLECTION</a></li>
        </ul>
      </div>
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-16 left-0 w-full bg-white p-6 md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col space-y-6 text-center">
          <li><a href="#home" className="hover:text-blue-500 text-xl">HOME</a></li>
          <li><a href="#shop" className="hover:text-blue-500 text-xl">SHOP</a></li>
          <li><a href="#about" className="hover:text-blue-500 text-xl">ABOUT</a></li>
          <li><a href="#new-collection" className="hover:text-blue-500 text-xl">NEW COLLECTION</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
