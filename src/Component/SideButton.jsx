import React, { useState, useEffect } from 'react';
import { CgMail } from "react-icons/cg";
import { FaInstagram, FaLinkedinIn, FaYoutube, FaFacebook, FaMapMarkerAlt } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { PiLessThanBold } from "react-icons/pi";
import { PiGreaterThanBold } from "react-icons/pi";


const SideContactBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [_isMobile, _setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      _setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed top-1/2 left-0 z-50">
      {/* Arrow Toggle Button */}
      <div
        className="bg-yellow-500 text-black py-3 px-2 rounded-r-lg cursor-pointer hover:bg-yellow-600 transition flex items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <PiLessThanBold /> : <PiGreaterThanBold />}
      </div>

      {/* Contact Info Panel */}
      {isOpen && (
        <div className="bg-yellow-400 text-black w-64 p-4 rounded-r-lg shadow-lg space-y-4 mt-2">
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-xl" />
            <span className="text-sm">HYDERABAD | BILASPUR | MUMBAI</span>
          </div>
          <div className="flex items-center space-x-2">
            <CgMail className="text-xl" />
            <a href="mailto:info@starmultiventure.com" className="text-sm hover:underline break-all">
              info@starmultiventure.com
            </a>
          </div>
          <div className="items-center"><p>+91 9039023820, 21,22</p></div>

          {/* Social Icons */}
          <div className="flex justify-start space-x-4 pt-2 text-xl">
            <Link to='https://www.facebook.com/star.multiventure' target="_blank" className="hover:text-blue-800">
                        <FaFacebook className="w-6 h-6 sm:w-7 sm:h-7" />
                      </Link>
                      <Link to='https://www.youtube.com/@Starmultiventure' target='_blank' className="hover:text-red-600">
                        <FaYoutube className="w-6 h-6 sm:w-7 sm:h-7" />
                      </Link>
                      <Link to='https://www.instagram.com/star.multiventure/' target="_blank" className="hover:text-red-500">
                        <FaInstagram className="w-6 h-6 sm:w-7 sm:h-7" />
                      </Link>
                      <Link to='https://www.linkedin.com/company/105677765/' target="_blank" className="hover:text-blue-700">
                        <FaLinkedinIn className="w-6 h-6 sm:w-7 sm:h-7" />
                      </Link>
                      <Link to='https://x.com/starsupplierss' target="_blank"> <BsTwitterX className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:text-white" /></Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideContactBar;