import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const images = [
  "/product/Gallery/6X4X4-01.webp",
  "/product/Gallery/6X4X4-02.webp",
  "/product/Gallery/udaypur-badi-talab.webp",
  "/product/Gallery/udaypur-dayadam.webp",
  "/product/Gallery/20X20-01.webp",
  "/product/Gallery/20X20-02.webp",
  "/product/Gallery/Jetty01.webp",
  "/product/Gallery/jetty02.webp",
  "/product/Gallery/pump-lifting01.webp",
  "/product/Gallery/pump-lifting02.webp",
  "/product/Gallery/pump-1.webp",
  "/product/Gallery/pump-2.webp",
  "/product/Gallery/pump-03.webp",
  "/product/Gallery/aqua-sport-1.webp",
  "/product/Gallery/circular-cage-1.webp",
  "/product/Gallery/circular-cage-2.webp",
  "/product/Gallery/floating-restaurant-1.webp",
  "/product/Gallery/floating-restaurant-2.webp",
  "/product/Gallery/floating-restaurant-3.webp",
  "/product/Gallery/floating-restaurant-4.webp",
  "/product/Gallery/floating-restaurant-5.webp",
  "/product/Gallery/floating-restaurant-6.webp",
  "/product/Gallery/floating-restaurant-7.webp",
  "/product/Gallery/floating-restaurant-8.webp",
  "/product/Gallery/floating-restaurant-9.webp",
  "/product/Gallery/jetty-01.webp",
  "/product/Gallery/jetty-02.webp",
  "/product/Gallery/soller-01.webp",
  "/product/Gallery/soller-02.webp",
"/product/Gallery/soller-03.webp",


  
]; 

const SliderGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="w-full bg-white py-16 flex flex-col items-center">
      <div className="w-full max-w-[1600px]">
        <Swiper
          effect="coverflow"
          centeredSlides
          loop
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          spaceBetween={10}
          navigation={false}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Navigation, Autoplay]}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
        >
          {images.map((src, i) => (
            <SwiperSlide
              key={i}
              className="flex justify-center items-center transition-all duration-500 ease-in-out z-0 hover:z-20"
            >
              <div
                className="transition-all duration-500 ease-in-out 
                           w-[90vw] sm:w-[80vw] md:w-[600px] lg:w-[700px] xl:w-[900px] 
                           h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] xl:h-[500px] 
                           hover:w-[95vw] sm:hover:w-[90vw] md:hover:w-[700px] lg:hover:w-[900px] xl:hover:w-[1080px] 
                           rounded-xl overflow-hidden border border-white shadow-xl cursor-pointer"
                onClick={() => setSelectedImage(src)}
              >
              <img src={src} alt={`Slide ${i}`} className="w-full h-full object-cover" loading="lazy" decoding="async" sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 600px, (max-width: 1280px) 700px, 900px" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-2 md:p-4">
          {/* Close button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-50 bg-black bg-opacity-50 rounded-full p-2 md:p-3 text-white hover:bg-opacity-70 transition-opacity"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Modal content */}
          <div
            className="relative 
                       w-[95vw] max-h-[95vh] 
                       md:max-w-[80vw] lg:max-w-[70vw] xl:max-w-[60vw] 
                       bg-white rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="relative">
              <img
                src={selectedImage}
                alt="Gallery Preview"
                className="w-full h-auto max-h-[70vh] md:max-h-[80vh] object-contain"
                loading="eager"
                decoding="async"
              />

              {/* Overlay text */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white">
                <p className="text-sm md:text-base font-medium">
                  Star Multiventure - Project Gallery
                </p>
                <p className="text-xs md:text-sm text-gray-300">
                  Premium HDPE Aquaculture Solutions
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="p-4 bg-white border-t flex flex-col sm:flex-row gap-2 sm:gap-4">
              <button
                onClick={() => setSelectedImage(null)}
                className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm md:text-base"
              >
                Close
              </button>
              <a
                href="/contactus"
                className="flex-1 px-4 py-2 bg-[#f1b400] text-black font-semibold rounded-lg hover:bg-black hover:text-white transition-colors text-center text-sm md:text-base"
              >
                Get Quote
              </a>
            </div>
          </div>

          {/* Click outside to close */}
          <div className="absolute inset-0 -z-10" onClick={() => setSelectedImage(null)} />
        </div>
      )}
    </div>
  );
};

export default SliderGallery;


