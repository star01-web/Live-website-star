import React from 'react'


export default function AboutSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-16 py-8 sm:py-12 bg-gradient-to-r from-white to-gray-100">
      {/* Left Content */}
      <div className="w-full md:w-1/2 text-left">
        <h1 className="text-yellow-500 font-semibold text-xl sm:text-md uppercase tracking-wide hover:scale-y-100 hover:text-yellow-500 relative inline-block before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-yellow-500 before:transition-all before:duration-300 before:ease-in-out hover:before:w-full">Who We Are</h1>
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-900 mt-2 leading-snug">
          Your Trusted Partner in Advancing Aquaculture Excellence
        </h2>
        <p className="text-black mt-4 leading-relaxed">
         At <b>Star Multiventure Pvt. Ltd.</b>, we are more than just a solutions provider—we are passionate collaborators dedicated to transforming the future of fish farming in India and beyond. With a deep understanding of the challenges and opportunities in the aquaculture sector, we bring innovative, practical, and future-ready solutions that cater to the unique needs of every stakeholder.
        </p>
        <p className="text-black mt-4 leading-relaxed">
        Our core mission is to encourage sustainable development, encourage bold innovation, and open doors to new opportunities that help the aquaculture industry grow responsibly and resiliently. Every service we offer is thoughtfully designed and customised to support a healthier, more eco-conscious, and economically viable ecosystem.
        </p>
        <p className="text-black mt-4 leading-relaxed">
         Together, with shared vision and commitment, let&apos;s work hand in hand to build a stronger, more prosperous, and environmentally sustainable future-one meaningful step at a time.
        </p>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 relative mt-8 md:mt-0 flex justify-center">
  {/* Foreground Decorative Divs */}
  {/* <div className="absolute w-full h-full">
    <div className="absolute top-0 left-2 border rounded-full w-9 h-9"></div>
    <div className="absolute top-0 right-0 border rounded-full w-9 h-9"></div>
    <div className="absolute bottom-0 left-0 border rounded-full w-9 h-9"></div>
    <div className="absolute bottom-0 right-0 border rounded-full w-9 h-9"></div>
  </div> */}

  {/* Video */}
  <video
    src="/FishUnderWater.mp4"
    alt="Fish farming cage"
    className="relative w-[250px] sm:w-[300px] md:w-[350px] lg:w-[450px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[450px] shadow-3xl border-[8px] border-yellow-500 rounded-3xl object-cover z-10 transition-transform duration-300 hover:scale-105"
    autoPlay
    loop
    muted
    objectFit="cover"
    lazyLoading="lazy"
  />
</div>

    </div>
  );
}
