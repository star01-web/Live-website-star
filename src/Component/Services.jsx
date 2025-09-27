import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import ServicesSchema from "./ServicesSchema";
import SeoSchema from "./SeoSchema";

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
{/* <ServicesSchema /> */}
<SeoSchema/>

    <div className="bg-gray-100 p-4 sm:p-6 min-h-screen flex justify-center mt-32 ">
          <div className="w-full sm:max-w-2xl lg:max-w-4xl bg-white p-4 sm:p-8 rounded-lg shadow-md">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Services & Support</h1>
              <p className="text-gray-700 mb-4 sm:mb-6">
                  At Star Multiventure Pvt. Ltd., we understand that in aquaculture, success isn’t just about high-quality cage nets — it’s also about having dependable support when you need it most. That’s why we go beyond simply delivering top-notch products. We’re here for you every step of the way, with services designed to give you confidence and peace of mind.
              </p>
              
              {sections.map((section, index) => (
                  <div key={index} className="mb-4 sm:mb-6 pb-4 border-b border-gray-300 last:border-none">
                      <h2 className="text-lg sm:text-xl font-semibold text-gray-800">{section.title}</h2>
                      <p className="text-gray-700 mt-2">{section.content}</p>
                  </div>                  
              ))}
               {/* INTERNAL LINKS SECTION */}
          <div className="bg-white rounded-lg shadow-md p-6 mt-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Explore Our Offerings</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <Link to="/products" className="bg-[#ffde1d] text-black font-bold px-6 py-3 rounded-lg hover:bg-black hover:text-white transition duration-300 inline-block">
                  View Our Products
                </Link>
                <p className="text-gray-600 mt-2 text-sm">
                  Discover our comprehensive range of HDPE fish farming cages and floating jetties
                </p>
              </div>
              <div className="text-center">
                <Link to="/success-story" className="bg-[#ffde1d] text-black font-bold px-6 py-3 rounded-lg hover:bg-black hover:text-white transition duration-300 inline-block">
                  Success Stories
                </Link>
                <p className="text-gray-600 mt-2 text-sm">
                  Read about successful aquaculture projects across India
                </p>
              </div>
              <div className="text-center">
                <Link to="/gallery" className="bg-[#ffde1d] text-black font-bold px-6 py-3 rounded-lg hover:bg-black hover:text-white transition duration-300 inline-block">
                  Project Gallery
                </Link>
                <p className="text-gray-600 mt-2 text-sm">
                  View photos of our installations and completed projects
                </p>
              </div>
            </div>
            
          <div className="mt-8 p-4 bg-white rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Need Technical Consultation?</h3>
              <p className="text-gray-700 mb-4">
                <strong>Need Technical Guidance ? </strong>We&apos;re Here to Help. Planning an aquaculture project? Our experienced team is just a call away. Whether it&apos;s choosing the right cage size, designing your mooring system, or setting up pontoons, we&apos;re here to walk you through every detail. Let&apos;s build something great — together.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contactus" className="text-blue-600 hover:underline font-semibold">
                  Contact Our Experts →
                </Link>
                <Link to="/aboutus" className="text-green-600 hover:underline font-semibold">
                  Learn About Our Company →
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center bg-white p-6 rounded-xl">
      <h3 className="text-xl font-bold text-blue-600">Get Started Today!</h3>
      <p className="text-gray-700 mt-2">
        <strong>Ready to Grow ? </strong>Let&apos;s Get Started Today! There&apos;s never been a better time to take your aquaculture journey to the next level. Whether you&apos;re just starting out or scaling up, we&apos;re here to support you with reliable, high-quality fish farming solutions. Let&apos;s talk — because your fish deserve the best, and so does your business.
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
