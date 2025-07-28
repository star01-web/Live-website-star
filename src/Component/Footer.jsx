import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { BsTwitterX } from "react-icons/bs";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaFacebookF, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
<Helmet>
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "name": "Star Multiventure Pvt. Ltd.",
          "alternateName": "Star Suppliers",
          "url": "https://starmultiventure.in",
          "logo": "https://starmultiventure.in/logo02.svg",
          "sameAs": [
            "https://www.facebook.com/star.multiventure",
            "https://www.instagram.com/star.multiventure/",
            "https://www.linkedin.com/company/105677765/",
            "https://x.com/starsupplierss",
            "https://www.youtube.com/@Starmultiventure"
          ]
        },
        {
          "@type": "LocalBusiness",
          "name": "Star Multiventure - Bilaspur",
          "parentOrganization": {
            "@type": "Organization",
            "name": "Star Multiventure Pvt. Ltd."
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bilaspur",
            "addressRegion": "Chhattisgarh",
            "addressCountry": "IN"
          },
          "telephone": "+91-9039023820",
          "email": "info@starmultiventure.com",
          "openingHours": "Mo-Sa 10:00-18:00"
        },
        {
          "@type": "LocalBusiness",
          "name": "Star Multiventure - Hyderabad",
          "parentOrganization": {
            "@type": "Organization",
            "name": "Star Multiventure Pvt. Ltd."
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Hyderabad",
            "addressRegion": "Telangana",
            "addressCountry": "IN"
          },
          "telephone": "+91-9039023821",
          "email": "info@starmultiventure.com",
          "openingHours": "Mo-Sa 10:00-18:00"
        },
        {
          "@type": "LocalBusiness",
          "name": "Star Multiventure - Mumbai",
          "parentOrganization": {
            "@type": "Organization",
            "name": "Star Multiventure Pvt. Ltd."
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mumbai",
            "addressRegion": "Maharashtra",
            "addressCountry": "IN"
          },
          "telephone": "+91-9039023822",
          "email": "info@starmultiventure.com",
          "openingHours": "Mo-Sa 10:00-18:00"
        }
      ]
    })}
  </script>
</Helmet>
    <footer className="bg-yellow-400 text-black py-5 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Information Section */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Information</h3>
          <ul className="space-y-2 sm:space-y-3 text-base sm:text-lg">
            <li className="font-semibold text-base sm:text-lg mt-2 sm:mt-4">Contact Number</li>
            {/* <li className="font-semibold text-base sm:text-lg mt-2 sm:mt-4">Email</li> */}
            {/* <li className="text-base sm:text-lg">07752-464764</li> */}
            <li className="text-base sm:text-lg">+91 9039023820, 21,22,26</li>
            <li className="font-semibold text-base sm:text-lg mt-2 sm:mt-4">info@starmultiventure.com</li>
            <li className="flex items-center flex-wrap">
              <FaMapMarkerAlt className="w-5 h-5 mr-3 text-xl" /> HYDERABAD | BILASPUR | MUMBAI
            </li>
            <li className="flex items-center mt-2 sm:mt-4">
              <FaClock className="w-5 h-5 mr-3" /> Mon - Sat: 10 am - 6 pm
            </li>
          </ul>
        </div>

        {/* Menu Section */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Quick Links</h3>
          <ul className="space-y-2 sm:space-y-3 text-base sm:text-lg">
            <li><Link to='/aboutus' onClick={handleLinkClick} className="relative hover:text-gray-800 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-gray-800 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">About Us</Link></li>
            <li><Link to='/products' onClick={handleLinkClick} className="relative hover:text-gray-800 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-gray-800 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">Products</Link></li>
            <li><Link to='/services' onClick={handleLinkClick} className="relative hover:text-gray-800 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-gray-800 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">Service & Support</Link></li>
            <li><Link to='/success-story' onClick={handleLinkClick} className="relative hover:text-gray-800 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-gray-800 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">Success Story</Link></li>
            <li><Link to='/contactus' onClick={handleLinkClick} className="relative hover:text-gray-800 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-gray-800 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">Contact Us</Link></li>
            <li>
              <a href="/Booklet.pdf" target="_blank" className="relative hover:text-gray-800 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-gray-800 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">Our Brochure</a>
            </li>
          </ul>
        </div>

        {/* Location/Logo Section */}

<div className="relative w-full overflow-hidden rounded-xl shadow-lg"
     style={{ paddingBottom: '66.25%' }} // 16:9 Aspect Ratio
>
  <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">
  Office Location
</h3>

  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924.3458998063276!2d82.14437008299691!3d22.07316267710738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280b8ab0f9c161%3A0x94338c313d4752fd!2sStar%20Suppliers!5e0!3m2!1sen!2sin!4v1751008654335!5m2!1sen!2sin"
    className="absolute top-10 left-0 w-full h-full"
    style={{ border: 0 }}
    allowFullScreen=""                                    
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Star Suppliers Location"
  ></iframe>
</div>


      </div>

      {/* Footer Bottom */}
      <div className="border-t border-black mt-8 sm:mt-10 pt-4 sm:pt-6 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6">
        <p className="text-xs sm:text-sm text-center sm:text-left">
          © 2024 Stars Multiventure Pvt. Ltd. All Rights Reserved
        </p>
        <div className="flex space-x-4 sm:space-x-6 mt-4 sm:mt-0">
          <Link to='https://www.facebook.com/star.multiventure' target="_blank" className="transition-all duration-300 ease-in-out hover:text-blue-800 hover:opacity-80 hover:scale-110">
            <FaFacebook className="w-6 h-6 sm:w-7 sm:h-7 transition-all duration-300 ease-in-out" />
          </Link>
          <Link to='https://www.youtube.com/@Starmultiventure' target='_blank' className="transition-all duration-300 ease-in-out hover:text-red-600 hover:opacity-80 hover:scale-110">
            <FaYoutube className="w-6 h-6 sm:w-7 sm:h-7 transition-all duration-300 ease-in-out" />
          </Link>
          <Link to='https://www.instagram.com/star.multiventure/' target="_blank" className="transition-all duration-300 ease-in-out hover:text-red-500 hover:opacity-80 hover:scale-110">
            <FaInstagram className="w-6 h-6 sm:w-7 sm:h-7 transition-all duration-300 ease-in-out" />
          </Link>
          <Link to='https://www.linkedin.com/company/105677765/' target="_blank" className="transition-all duration-300 ease-in-out hover:text-blue-700 hover:opacity-80 hover:scale-110">
            <FaLinkedinIn className="w-6 h-6 sm:w-7 sm:h-7 transition-all duration-300 ease-in-out" />
          </Link>
          <Link to='https://x.com/starsupplierss' target="_blank" className="transition-all duration-300 ease-in-out hover:text-white hover:opacity-80 hover:scale-110"> <BsTwitterX className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer transition-all duration-300 ease-in-out" /></Link>
        </div>
      </div>
    </footer></>
  );
}

export default Footer;
