import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { Link } from "react-router-dom";
import testimonials from "../Component/StateProjectData";
function AchievementsTestimonials() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [expandedIndexes, setExpandedIndexes] = useState([]);

  // ✅ Fix: Flatten testimonials from object into a single array
  const allTestimonials = Object.values(testimonials).flat();

  const toggleExpand = (index) => {
    setExpandedIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    centerMode: true,
    centerPadding: "0",
  };

  const handleImageClick = (src) => {
    if (src === "/Trust-Seal.webp") {
      setSelectedImage("/Indiamart.webp");
    } else {
      setSelectedImage(src);
    }
  };

  const handleClosePreview = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClosePreview();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <section className="text-center py-12 bg-gradient-to-b from-white to-gray-100">
        {/* <h1 className="text-yellow-500 font-semibold text-md uppercase tracking-wide relative inline-block"> */}
          {/* <Link to="/">Achievement</Link> */}
        {/* </h1> */}
        <br />
        <h2 className="text-3xl md:text-4xl font-bold text-black-500 mt-2 hover:text-black relative inline-block before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-black before:transition-all before:duration-300 before:ease-in-out hover:before:w-full">
          Award & Recognition
        </h2>

        <div className="w-full mt-8">
          <div className="flex flex-wrap justify-center gap-9">
            {[
              "/nfdblogo.webp",
             "/logo-optimized.webp",
              "/Trust-Seal.webp",
              // "/Indiamart.webp",
              
            ].map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Award ${idx}`}
                className="w-50 h-42 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
                onClick={() => handleImageClick(src)}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 overflow-auto"
          onClick={handleClosePreview}
        >
          <div className="relative">
            <button
              className="absolute top-2 right-3 text-yellow-500 text-2xl hover:text-yellow-500"
              onClick={handleClosePreview}
            >
              X
            </button>
            <img
              src={selectedImage}
              alt="Preview"
              className="max-w-full max-h-screen object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <section className="py-16 bg-gradient-to-b from-yellow-300 to-yellow-500">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 hover:text-black relative inline-block before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-black before:transition-all before:duration-300 before:ease-in-out hover:before:w-full">
            Our Testimonials
          </h2>
        </div>
        <div className="container mt-8 max-w-5xl mx-auto px-3">
          <Slider {...sliderSettings}>
            {Array.isArray(allTestimonials) &&
              allTestimonials.map((testimonial, index) => {
                const isExpanded = expandedIndexes.includes(index);
                return (
                  <div key={index} className="p-4">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center min-h-[400px] flex flex-col justify-start">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 mx-auto mb-4 rounded-lg object-cover"
                      />
                      <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                      <p className="text-gray-700">
                        <strong>Place:</strong> {testimonial.place}
                      </p>
                      <p className="text-gray-700">
                        <strong>Installation Product:</strong> {testimonial.product_service}
                      </p>
                      <div className="mt-4 text-gray-600">
                        <p className={isExpanded ? "" : "line-clamp-4"}>
                          {testimonial.msg}
                        </p>
                        {testimonial.msg?.length > 100 && (
                <button
                  onClick={() => toggleExpand(index)}
                  className="text-blue-600 text-sm font-medium mt-2 hover:underline block"
                  type="button"
                >
                  {isExpanded ? "See Less" : "See More"}
                </button>
              )}
                      </div>
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </section>
    </div>
  );
}

export default AchievementsTestimonials;
