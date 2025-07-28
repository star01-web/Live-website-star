import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import ServicesSchema from "./ServicesSchema";

const sections = [
  {
      title: "24x7 Customer Support – Always by Your Side",
      content: "Fish farming doesn’t stop, and neither do we. Our customer support team is available around the clock to help you tackle challenges as they arise. Whether it’s a quick query or an urgent issue, we’re just a phone call away, ready with expert advice and prompt assistance."
  },
  {
      title: "Hassle-Free Replacements – We’ve Got You Covered",
      content: "Your satisfaction matters to us. If you face any manufacturing defect within five years of your purchase, we’ll replace the affected material — no questions asked. Because standing behind our products is part of who we are."
  },
  {
      title: "Expert Technical Team – Smart Solutions That Work for You",
      content: "Our highly skilled technical team is equipped to provide tailored solutions based on your specific needs. From farm setup to daily operations, we offer practical, field-tested guidance to help you get the most out of your fish farming venture."
  },
  {
      title: "After-Sales Service – More Than Just a Transaction",
      content: "Our relationship doesn’t end once the nets are delivered. We see every sale as the beginning of a long-term partnership. You can count on us for continued support and services designed to help you succeed, year after year."
  },
  {
      title: "5-Year Warranty – Protecting What You’ve Built",
      content: "Investing in aquaculture equipment is a big step. That’s why we offer a 5-year warranty against manufacturing defects — to protect your investment and give you complete peace of mind."
  },
  {
      title: "On-Site Technical Visits – Support That Comes to You",
      content: "Need hands-on help? No problem. Our technicians are available for on-site visits to your farm, offering personalized support and ensuring your equipment is performing at its best."
  },
  {
      title: "Let’s Grow Together",
      content: "Ready to upgrade your fish farming operations? Get in touch with us today to learn more about our complete range of aquaculture solutions. Your fish deserves the best — and we’re here to deliver exactly that."
  }
];

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <> 
<ServicesSchema />

    <div className="bg-gray-100 p-4 sm:p-6 min-h-screen flex justify-center mt-32 ">
          <div className="w-full sm:max-w-2xl lg:max-w-4xl bg-white p-4 sm:p-8 rounded-lg shadow-md">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Services & Support</h1>
              <p className="text-gray-700 mb-4 sm:mb-6">
                  At Star Multiventure Pvt. Ltd., we understand that in aquaculture, success isn’t just about high-quality cage nets — it’s also about having dependable support when you need it most. That’s why we go beyond simply delivering top-notch products. We’re here for you every step of the way, with services designed to give you confidence and peace of mind.
              </p>
              
              {sections.map((section, index) => (
                  <div key={index} className="mb-4 sm:mb-6 pb-4 border-b border-gray-300 last:border-none">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{section.title}</h3>
                      <p className="text-gray-700 mt-2">{section.content}</p>
                  </div>                  
              ))}
              <div className="mt-8 text-center bg-blue-100 p-6 rounded-lg">
      <h3 className="text-xl font-bold text-blue-600">Get Started Today!</h3>
      <p className="text-gray-700 mt-2">
        Now is the perfect time to take your aquaculture business to the next level.
        Contact us today to explore our comprehensive range of fish farming products.
        Your fish deserve the best, and we’re here to make it happen.
      </p>
      <button className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">
        <Link to='/contactus'> Contact Us</Link>
      </button>
    </div>
          </div>
      </div>
      </>
  );
};

export default Services;
