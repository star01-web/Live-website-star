import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function ContactForm() {
    return (
      <>
        <Helmet>
          <title>Contact Star Multiventure - Aquaculture Equipment Experts | HDPE Fish Cage Suppliers</title>
          <meta name="description" content="Contact Star Multiventure for premium aquaculture equipment, HDPE fish farming cages, and floating jetties. Expert consultation and nationwide delivery across India." />
          <meta name="keywords" content="contact aquaculture supplier, fish cage manufacturer contact, HDPE pontoon supplier India, aquaculture equipment consultation, fish farming support" />
        </Helmet>
        
        <div className="flex flex-col items-center justify-center bg-gray-100 py-12 px-4 md:px-12 mt-16">
          <h3 className="text-yellow-500 font-semibold text-md underline underline-offset-8 mb-2">GET IN TOUCH</h3>
          
          {/* Enhanced Content Section */}
          <div className="max-w-6xl w-full mb-8">
            <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 mb-8">
              <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Star Multiventure - Your Trusted Aquaculture Partner</h1>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-blue-600">Why Choose Star Multiventure?</h2>
                  <p className="text-gray-700 leading-relaxed">
                    With over a decade of experience in the aquaculture industry, Star Multiventure has established itself as India's premier manufacturer and supplier of high-quality fish farming equipment. We specialize in HDPE fish farming cages, floating jetties, pontoon systems, and comprehensive aquaculture solutions that help fish farmers achieve sustainable and profitable operations.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Our commitment to quality, innovation, and customer satisfaction has made us the preferred choice for aquaculture professionals across India. From small-scale fish farmers to large commercial aquaculture facilities, we provide tailored solutions that meet the unique needs of each client.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-blue-600">Our Comprehensive Services</h2>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Custom aquaculture equipment design and manufacturing
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Technical consultation for fish farming projects
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Installation guidance and on-site support
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      24/7 customer support and after-sales service
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      5-year warranty on all HDPE products
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Nationwide delivery and logistics support
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get Expert Consultation Today</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Planning a new aquaculture project or looking to upgrade your existing fish farming setup? Our experienced team of aquaculture experts is ready to help you choose the right equipment for your specific needs. We provide detailed consultations covering cage sizing, pontoon configuration, net specifications, and complete system design.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Whether you're farming tilapia, pangasius, rohu, or any other fish species, we have the expertise and equipment to support your success. Contact us today to discuss your project requirements and receive a customized quote for your aquaculture equipment needs.
                </p>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6 md:p-8">        
            <h2 className="text-2xl font-bold mt-1">We Are Connected To Help Your Business!</h2>
            <p className="text-gray-600 mt-2">
              Ready to take your aquaculture business to the next level? Fill out the form below and our expert team will get back to you within 24 hours with personalized recommendations and competitive pricing for your fish farming equipment needs.
            </p>
          <form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
            <div className="flex flex-col">
              <label className="font-semibold text-sm mb-1">Name</label>
              <input type="text" placeholder="Name *" className="border p-2 rounded-md w-full" required />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-sm mb-1">Email</label>
              <input type="email" placeholder="E-mail *" className="border p-2 rounded-md w-full" required />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-sm mb-1">Phone</label>
              <input type="text" placeholder="Phone *" className="border p-2 rounded-md w-full" required />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-sm mb-1">Location</label>
              <input type="text" placeholder="Location *" className="border p-2 rounded-md w-full" required />
            </div>
            <div className="flex flex-col md:col-span-2">
              <label className="font-semibold text-sm mb-1">Installation Place</label>
              <textarea placeholder="Installation Place" className="border p-2 rounded-md w-full" rows="2"></textarea>
            </div>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg md:col-span-2">
              SUBMIT NOW
            </button>
          </form>
        </div>
      </div>
      </>
    );
  }
