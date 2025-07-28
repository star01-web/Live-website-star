import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Gallery = () => {
   const schema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "name": "Star Multiventure Project Gallery",
  "description": "Photos of aquaculture cages, floating docks, tourism platforms, and completed projects.",
  "url": "https://starsupplierss.com/gallery/",
  "publisher": {
    "@type": "Organization",
    "name": "Star Multiventure Pvt. Ltd.",
    "url": "https://starsupplierss.com"
  }
};
  const media = [
    { type: 'photo', src: '/product/Gallery/6X4X4-01.webp', alt: 'HDPE PONTOON RECTANGLE AQUACULTURE CAGE 6X4X4', msg:'Star Suppliers, an Original Equipment Manufacturer (OEM) certified by CIPET and ISO 9001:2015, Star Suppliers fish culture cages are made using HDPE floating pontoons or docks in sizes 6×4×4 m, 5×5×4 m, and 20×20×4.5 m. All components—including center pins and auto-lock nut bolts—are manufactured from HDPE with a 5-year manufacturing defect warranty. High-strength HDPE/nylon nets are used. The product is CIPET-tested and ISO 9001:2015 certified.' },
    { type: 'photo', src: '/product/Gallery/6X4X4-02.webp', alt: 'HDPE PONTOON RECTANGLE AQUACULTURE CAGE 6X4X4', msg:'Star Suppliers, an Original Equipment Manufacturer (OEM) certified by CIPET and ISO 9001:2015, Star Suppliers fish culture cages are made using HDPE floating pontoons or docks in sizes 6×4×4 m, 5×5×4 m, and 20×20×4.5 m. All components—including center pins and auto-lock nut bolts—are manufactured from HDPE with a 5-year manufacturing defect warranty. High-strength HDPE/nylon nets are used. The product is CIPET-tested and ISO 9001:2015 certified.' },
    { type: 'photo', src: '/product/Gallery/20X20-01.webp', alt: 'HDPE PONTOON SQUARE AQUACULTURE CAGE 20X20X5', msg:'Star Suppliers, an Original Equipment Manufacturer (OEM) certified by CIPET and ISO 9001:2015, offers 20mx20m HDPE cages with a 5-year manufacturing defect warranty. Engineered for high performance, these UV-stabilized, corrosion-free cages ensure durability in marine and freshwater environments. Their modular design enables easy assembly, scalability, and low maintenance—ideal for efficient, sustainable aquaculture.' },
    { type: 'photo', src: '/product/Gallery/20X20-02.webp', alt: 'HDPE PONTOON SQUARE AQUACULTURE CAGE 20X20X5', msg:'Star Suppliers, an Original Equipment Manufacturer (OEM) certified by CIPET and ISO 9001:2015, offers 20mx20m HDPE cages with a 5-year manufacturing defect warranty. Engineered for high performance, these UV-stabilized, corrosion-free cages ensure durability in marine and freshwater environments. Their modular design enables easy assembly, scalability, and low maintenance—ideal for efficient, sustainable aquaculture.' },
    { type: 'photo', src: '/product/Gallery/Jetty01.webp', alt: 'THE HDPE FLOATING JETTY IS A VERSATILE AND ROBUST FLOATING STRUCTURE', msg:'Star Suppliers, an Original Equipment Manufacturer (OEM) certified by CIPET and ISO 9001:2015, offers HDPE Floating Jetties with a 5-year warranty against manufacturing defects. Engineered with UV-resistant HDPE pontoons, the modular jetties ensure high buoyancy, durability, and low maintenance for aquaculture and aquasports. Suitable for freshwater and marine use, they provide stable, customizable access for boats, kayaks, and fish farming operations.' },
    { type: 'photo', src: '/product/Gallery/jetty02.webp', alt: 'THE HDPE FLOATING JETTY IS A VERSATILE AND ROBUST FLOATING STRUCTURE', msg:'Star Suppliers, an Original Equipment Manufacturer (OEM) certified by CIPET and ISO 9001:2015, offers HDPE Floating Jetties with a 5-year warranty against manufacturing defects. Engineered with UV-resistant HDPE pontoons, the modular jetties ensure high buoyancy, durability, and low maintenance for aquaculture and aquasports. Suitable for freshwater and marine use, they provide stable, customizable access for boats, kayaks, and fish farming operations.'},
    { type: 'photo', src: '/product/Gallery/pump-lifting01.webp', alt: "REMOVING WATER FROM MINES – ",msg1:"WHY IT'S IMPORTANT WHEN WORKING IN MINES, ESPECIALLY DEEP UNDERGROUND OR IN OPEN PITS, WATER CAN BECOME A SERIOUS CHALLENGE.", msg2:"Rain, groundwater, or even water used in the mining process can start to collect and fill up the mine. That’s where mine dewatering systems come in — they’re specially designed to keep the mine dry and safe.These systems use powerful pumps, drainage pipes, and diversion channels to move water out of the mining area. By doing this, they prevent flooding, stop the walls of open-pit mines from collapsing, and help workers do their jobs safely and efficiently.In simple terms, dewatering is like making sure a construction site doesn’t get waterlogged — just on a much bigger, deeper, and riskier scale." },
    { type: 'photo', src: '/product/Gallery/pump-lifting02.webp', alt: "REMOVING WATER FROM MINES – ",msg1:"WHY IT'S IMPORTANT WHEN WORKING IN MINES, ESPECIALLY DEEP UNDERGROUND OR IN OPEN PITS, WATER CAN BECOME A SERIOUS CHALLENGE.",msg2:"Rain, groundwater, or even water used in the mining process can start to collect and fill up the mine. That’s where mine dewatering systems come in — they’re specially designed to keep the mine dry and safe.These systems use powerful pumps, drainage pipes, and diversion channels to move water out of the mining area. By doing this, they prevent flooding, stop the walls of open-pit mines from collapsing, and help workers do their jobs safely and efficiently.In simple terms, dewatering is like making sure a construction site doesn’t get waterlogged — just on a much bigger, deeper, and riskier scale." },
    { type: 'video', url: 'https://www.youtube.com/embed/jFi7m8Y2R_E', title: 'Video 1' },
    { type: 'video', url: 'https://www.youtube.com/embed/E7p6sjOlRL0', title: 'Video 2' },
    { type: 'video', url: 'https://www.youtube.com/embed/wfAQBMU0ASE', title: 'Video 3' },
    { type: 'video', url: 'https://www.youtube.com/embed/SofG6KnjASk', title: 'Video 4' },
    { type: 'video', url: 'https://www.youtube.com/embed/97dnuTEoHF8', title: 'Video 5' },
    { type: 'video', url: 'https://www.youtube.com/embed/hhHbaWd_eE4', title: 'Video 6' },
    { type: 'video', url: 'https://www.youtube.com/embed/kdBGP5SRcR8', title: 'Video 7' },
    { type: 'video', url: 'https://www.youtube.com/embed/CyXGzyq7DU0', title: 'Video 8' },
  ];

  const [currentIndex, setCurrentIndex] = useState(null);
  const photos = media.filter(m => m.type === 'photo');
  const videos = media.filter(m => m.type === 'video');

  const openModal = (index) => setCurrentIndex(index);
  const closeModal = () => setCurrentIndex(null);
  const showNext = () => setCurrentIndex((prev) => (prev + 1) % photos.length);
  const showPrev = () => setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  useEffect(() => {
    const handleKey = (e) => {
      if (currentIndex !== null) {
        if (e.key === 'Escape') closeModal();
        else if (e.key === 'ArrowRight') showNext();
        else if (e.key === 'ArrowLeft') showPrev();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [currentIndex]);

  return (
    <>
   

    <Helmet>
  <title>Gallery - Star Multiventure Pvt. Ltd.</title>
  <meta
    name="description"
    content="View the photo gallery of Star Multiventure’s aquaculture cages, floating docks, tourism platforms, and completed projects."
  />
  {/* <link rel="canonical" href="https://starsupplierss.com/gallery/" /> */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
  />
</Helmet>

    <div className="container mx-auto px-4 py-12 mt-28">
      <h1 className="text-3xl font-bold text-center mb-8">Photo Gallery</h1>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {photos.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            className="w-full h-48 object-cover rounded shadow hover:brightness-90 cursor-pointer"
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {/* Image Modal */}
      {currentIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            onClick={closeModal}
            className="absolute top-4 right-6 text-white text-5xl font-bold z-50"
          >
            &times;
          </button>

          <button
            onClick={showPrev}
            className="absolute left-4 text-white text-5xl z-50"
          >
            ‹
          </button>

          <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden max-w-6xl w-full max-h-[90vh]">
            <div className="w-full md:w-[65%] flex justify-center items-center bg-black">
              <img
                src={photos[currentIndex].src}
                alt={photos[currentIndex].alt}
                className="max-h-[80vh] object-contain"
              />
            </div>
            <div className="w-full md:w-[35%] bg-white p-4 flex flex-col justify-between overflow-y-auto">
              <div className="mb-4">
                <h2 className="text-lg font-semibold">{photos[currentIndex].alt}</h2>
                <p className="text-gray-600 mt-1 text-sm">
                  {photos[currentIndex].msg1}
                </p>
                <p className="text-gray-600 mt-1 text-sm">
                  {photos[currentIndex].msg2 || photos[currentIndex].msg}
                </p>
              </div>
              <div className="flex justify-center mt-4 ">
                <Link to ='/contactus'><button className='w-[300px] h-12 bg-amber-400 border rounded-2xl'>Contact Us</button></Link>
                </div>
            </div>
          </div>

          <button
            onClick={showNext}
            className="absolute right-4 text-white text-5xl z-50"
          >
            ›
          </button>
        </div>
      )}

      {/* Video Grid */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-center">Video Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((video, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow">
            <iframe
              src={video.url}
              title={video.title}
              className="w-full h-48"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            {/* <p className="text-center mt-2 text-sm font-medium">{video.title}</p> */}
          </div>
        ))}
      </div>
    </div></>
  );
};

export default Gallery;
