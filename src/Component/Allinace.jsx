import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Alliance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-40">
      {/* Certificate Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <img
          src="/Certification.jpg"
          alt="Garware Certificate"
          className="w-full md:w-1/2 rounded-lg shadow-md"
        />
        <div>
          <h2 className="text-3xl font-bold text-black pt-10 ">
            Garware Technical Fibres Ltd: Your Premier Aquaculture Nets Dealer in India
          </h2>
          <p className="text-gray-700 mt-2">
            Are you ready to elevate your aquaculture business to new heights? Look no
            further! We are thrilled to announce that as of April 2022, we have become
            the exclusive dealer of Garware Technical Fibres (Aquaculture Division) in
            India. Our commitment to providing top-quality Aquaculture Fish Farming cage
            nets is unwavering, and we’re excited to be your go-to source for these
            exceptional products.
          </p>
        </div>
      </div>

      {/* Product Range Section */}
      <div className="mt-8">
        <h3 className="text-2xl font-bold text-gray-800">A Wide Range of Aquaculture Nets</h3>
        <p className="text-gray-700 mt-2">
          At Garware Technical Fibres Ltd., we bring you an extensive selection of
          aquaculture nets tailored to meet your specific needs. Our product range
          includes:
        </p>
      </div>

      {/* Products */}
      <div className="mt-4 space-y-4">
        {[
          { title: "Nursery Nets", desc: "Designed to create a safe environment for young fish, ensuring proper growth." },
          { title: "Grow Out Nets", desc: "Provide ample space for fish to thrive and facilitate efficient farm management." },
          { title: "Bird Protection Nets", desc: "Acts as a barrier against unwanted avian intruders, ensuring fish safety." },
          { title: "Predator Nets", desc: "Protects fish from underwater predators, keeping stocks safe and secure." },
        ].map((item, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg">
            <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Tools and Quality Section */}
      <div className="mt-8">
        <h3 className="text-2xl font-bold text-gray-800">Essential Tools for Successful Fish Farming</h3>
        <p className="text-gray-700 mt-2">
          In addition to our premium nets, we offer a comprehensive range of essential
          tools to support successful fish farming. From net installation equipment to
          maintenance tools, we have everything you need to streamline your aquaculture
          operations.
        </p>
      </div>

      <div className="mt-6">
        <h3 className="text-2xl font-bold text-gray-800">Uncompromised Quality for Your Aquaculture Business</h3>
        <p className="text-gray-700 mt-2">
          When it comes to aquaculture, quality is paramount. Our partnership with
          Garware Technical Fibres ensures that you receive products of the highest
          standard. Our aquaculture nets are not only durable but also environmentally
          friendly, contributing to the sustainability of your fish farming endeavors.
        </p>
      </div>

      {/* Call to Action */}
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
  );
};

export default Alliance;