import React, { useState, useEffect } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { AiOutlineMenu } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { Link } from 'react-router-dom';
import '../main.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock body scroll on mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/aboutus', label: 'About' },
    { to: '/products', label: 'Products' },
    { to: '/services', label: 'Services' },
    // { to: '/ourproject', label: 'Projects' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/blogs', label: 'Blogs' },
    {to:'/success-story', label: 'Success Story'},
    { to: '/contactus', label: 'Contact Us' },

  ];

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-gray-700 to-black fixed top-0 left-0 w-full h-[90px] z-50 shadow-lg">
  <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-2 h-full relative">
    
    {/* Logo (overlapping) */}
    <div className="flex items-center relative z-10">
      <Link to="/">
        <img
          src="/Logo02.svg"
          alt="Star Multiventure Logo"
          className="h-[130px] w-auto mt-12 transition-all duration-300"
          loading="eager"
          width="200"
          height="130"
        />
      </Link>
    </div>

    {/* Hamburger Menu */}
    <button
      className="text-white text-2xl xl:hidden focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-800 rounded-md p-2"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      aria-expanded={isMenuOpen}
      aria-controls="mobile-menu"
      aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
    >
      <AiOutlineMenu aria-hidden="true" />
    </button>

    {/* Desktop Navigation */}
    <ul className="hidden xl:flex flex-nowrap space-x-10 items-center font-medium text-lg whitespace-nowrap">
      {navLinks.map(({ to, label }) => (
        <li key={to}>
          <Link
            to={to}
            className="text-gray-300 hover:text-yellow-500 relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-yellow-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className="bg-gray-900 fixed top-0 left-0 w-full h-screen z-50 flex flex-col items-center text-xl overflow-y-auto transition-all duration-100"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
          >
            <h2 id="mobile-menu-title" className="sr-only">Navigation Menu</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 text-white text-3xl p-1 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded-md"
              aria-label="Close navigation menu"
            >
              <MdClose aria-hidden="true" />
            </button>

            <nav aria-label="Mobile navigation">
              <ul className="flex flex-col space-y-6 text-center mt-20" role="menubar">
                {navLinks.map(({ to, label }) => (
                  <li key={to} role="none">
                    <Link
                      to={to}
                      className="text-gray-300 hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:text-yellow-400 rounded-md px-4 py-2 block"
                      onClick={() => setIsMenuOpen(false)}
                      role="menuitem"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
