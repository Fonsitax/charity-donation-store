import React from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-20 flex justify-between items-center p-4 bg-white ">
      <div className="flex items-center space-x-4">
        <a href="/" className="flex items-center">
          <img 
            src="src/assets/images/sea (1).png"
            alt="Logo" 
            className='h-12 w-12'
          />
        </a>
        <ul className="hidden md:flex space-x-8 text-white">
          <li><a href="#home" className="hover:text-blue-500 text-xl">HOME</a></li>
          <li><a href="#shop" className="hover:text-blue-500 text-xl">SHOP</a></li>
          <li><a href="#about" className="hover:text-blue-500 text-xl">ABOUT</a></li>
          <li><a href="#new-collection" className="hover:text-blue-500 text-xl">NEW COLLECTION</a></li>
        </ul>
      </div>
      <div className="flex items-center space-x-4">
        {/* Add the ThemeToggle here */}
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
