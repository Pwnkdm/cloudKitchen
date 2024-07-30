import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (path) => {
    setActiveSection(path);
    setIsMenuOpen(false); // Close menu on link click
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse" onClick={() => handleClick('/')}>
          <img src="./logo.png" className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Cloud Kitchen
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                  activeSection === '/' ? 'text-blue-700 dark:text-blue-500' : 'text-gray-900 dark:text-white'
                }`}
                onClick={() => handleClick('/')}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                  activeSection === '/about' ? 'text-blue-700 dark:text-blue-500' : 'text-gray-900 dark:text-white'
                }`}
                onClick={() => handleClick('/about')}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                  activeSection === '/services' ? 'text-blue-700 dark:text-blue-500' : 'text-gray-900 dark:text-white'
                }`}
                onClick={() => handleClick('/services')}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                  activeSection === '/pricing' ? 'text-blue-700 dark:text-blue-500' : 'text-gray-900 dark:text-white'
                }`}
                onClick={() => handleClick('/pricing')}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                  activeSection === '/contact' ? 'text-blue-700 dark:text-blue-500' : 'text-gray-900 dark:text-white'
                }`}
                onClick={() => handleClick('/contact')}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
