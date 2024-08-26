import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import UserAvtar from './UserAvtar';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { accessToken } = useSelector(state=>state.login);

  const handleClick = (path) => {
    setActiveSection(path);
    setIsMenuOpen(false); // Close menu on link click
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed w-full z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div>
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
          onClick={() => handleClick('/')}
        >
          <motion.img
            src="./logo.png"
            className="h-8"
            alt="Logo"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
          />
          <motion.span
            className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 120, delay: 0.1 }}
          >
            Cloud Kitchen
          </motion.span>
        </Link>
        </div>

        <div className='flex md:hidden'>
        <motion.button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 mr-5 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ rotate: 90 }}
          whileTap={{ scale: 0.9 }}
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
        </motion.button>
        <UserAvtar />
        </div>

        <AnimatePresence>
          {(isMenuOpen || !isMenuOpen) && (
            <motion.div
              className={`w-full md:block md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}
              id="navbar-default"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
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
                    to="/cart"
                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                      activeSection === '/cart' ? 'text-blue-700 dark:text-blue-500' : 'text-gray-900 dark:text-white'
                    }`}
                    onClick={() => handleClick('/cart')}
                  >
                    <motion.span className="hover:text-blue-300 flex" whileHover={{ scale: 1.1 }}>
                      <FaShoppingCart size={25} />
                      <span className="ml-1">Cart</span>
                    </motion.span>
                  </Link>
                </li>
                <div className='hidden sm:block'>
                   {accessToken &&  <UserAvtar />}
                </div>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
