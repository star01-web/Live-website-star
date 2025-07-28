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
    { to: '/blog', label: 'Blog' },
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
          alt="Logo"
          className="h-[130px] w-auto mt-12 transition-all duration-300"
        />
      </Link>
    </div>

    {/* Hamburger Menu */}
    <button
      className="text-white text-2xl xl:hidden"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <AiOutlineMenu />
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
          <div className="bg-gray-900 fixed top-0 left-0 w-full h-screen z-50 flex flex-col items-center text-xl overflow-y-auto transition-all duration-100">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 text-white text-3xl p-1"
            >
              <MdClose />
            </button>

            <ul className="flex flex-col space-y-6 text-center mt-20">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-gray-300 hover:text-yellow-400"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
