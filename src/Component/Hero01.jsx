import React from 'react';
import { FaPuzzlePiece } from "react-icons/fa6";
import { FcIdea } from "react-icons/fc";

function Hero01() {
    return (
<section className="bg-gray-100 py-16 px-4 md:px-16 pt-[152px]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Left Image Section */}
          {/* <div className="relative flex justify-center">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] transform transition-transform duration-300 hover:scale-105">
              <img 
                src="./v1.JPG" 
                alt="Aquaculture" 
                className="w-full h-full rounded-full border-4 border-white shadow-lg object-cover z-10 "
              />
              <div className="absolute inset-0 border-8 border-blue-500 rounded-full transform rotate-6 z-0"></div>
            </div>            
          </div> */}
          <div className="relative flex justify-center">
  <div className="relative w-48 h-32 sm:w-64 sm:h-40 md:w-96 md:h-56 lg:w-[28rem] lg:h-72 xl:w-[32rem] xl:h-80 transform transition-transform duration-300 hover:scale-105">
    <img 
      src="./kodar.webp" 
      alt="Aquaculture" 
      className="w-full h-full rounded-xl border-4 border-white shadow-lg object-cover z-10"
    />
    <div className="absolute inset-0 border-4 border-yellow-500 rounded-xl z-0"></div>
  </div>
</div>

          
          {/* Right Text Section */}
<div>
<h1 className="text-yellow-500 font-semibold text-2xl uppercase hover:text-yellow-500 relative inline-block before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-yellow-500 before:transition-all before:duration-300 before:ease-in-out hover:before:w-full">
 Company Vision</h1>
 <h2 className="text-2xl sm:text-4xl md:text-4xl lg:text-6xl font-bold mt-2 leading-tight">
 We Are Always Ready to Deliver the Best Services
</h2>
            <p className="text-gray-600 mt-4 text-sm sm:text-base md:text-lg lg:text-xl">
              Our Star Multiventure culture services are divided into six Mini Missions, for better focus and ease of implementation. The major services are proposed implemented under six main services
            </p>
          </div>
        </div>
  
        {/* Mission & Vision Cards */}
        <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 shadow-md rounded-lg flex items-start space-x-4 transform transition-transform duration-300 hover:scale-105">
            <div className="text-blue-500 text-3xl">
              <FaPuzzlePiece  className="text-yellow-400"/>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Mission</h3>
              <p className="text-gray-600 mt-2 text-sm sm:text-base md:text-lg lg:text-xl">
                At Star Multiventure, our mission is to empower aquaculture farmers with ethical and 
                effective services, boosting their productivity and production rates. We provide 
                top-quality infrastructure and tools to facilitate sustainable fish cultivation, 
                focusing on innovation and dedication to sustainable growth.
              </p>
            </div>
          </div>
  
          <div className="bg-white p-6 shadow-md rounded-lg flex items-start space-x-4 transform transition-transform duration-300 hover:scale-105">
            <div className="text-blue-500 text-3xl">
              <FcIdea />  
            </div>
            <div>
              <h3 className="text-xl font-semibold">Vision</h3>
              <p className="text-gray-600 mt-2 text-sm sm:text-base md:text-lg lg:text-xl">
                Our vision is to be the leading name in Industry Aquaculture, offering innovative 
                solutions and setting new industry standards. We aim to create a thriving and 
                sustainable future for aquaculture, benefiting farmers, the industry, and the environment.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

export default Hero01;
