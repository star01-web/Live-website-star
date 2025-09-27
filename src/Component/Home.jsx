import React, { useEffect, useState, lazy, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import Hero01 from "./Hero01";
import '../main.css'
import { Helmet } from "react-helmet-async";
import SeoSchema from "./SeoSchema";

// Lazy load non-critical components
const AboutSection = lazy(() => import("./AboutSection"));
const AchievementTestimonial = lazy(() => import("./AchievementsTestimonials"));
const BlogsFAQs = lazy(() => import("./BlogsFAQs"));
const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFormVisible, setFormVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    message: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleButtonClick = () => setFormVisible(true);
  const handleCloseForm = () => setFormVisible(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const { name, email, phone, product, quantity, message } = formData;

  // ✅ Basic Validation
  if (!name || !email || !phone ||!product ||!quantity ||!message) {
    alert(" Please fill in Name, Email, and Phone.");
    return;
  }

  const phoneRegex = /^[6-9]\d{9}$/;
  if (!phoneRegex.test(phone)) {
    alert("⚠️ Please enter a valid 10-digit Indian phone number.");
    return;
  }

  setLoading(true);

  try {
    // ✅ Call API
    const response = await fetch("https://www.starsupplierss.com/formData.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        product,
        quantity,
        message,
      }),
    });

    // ✅ Clone response to allow backup read
    const responseClone = response.clone();

    let result;
    try {
      result = await response.json(); // Try parsing JSON
    } catch (jsonError) {
      const rawText = await responseClone.text(); 
      console.error(" Invalid JSON returned from server.");
      console.error(" Raw response:", rawText);
      alert("Something went wrong. Please try again later.");
      navigate("/errorpage");
      return;
    }

    // ✅ Process result
    console.log("✅ Server response:", result);

    if (result.status === "success") {
      alert("✅ Thank you! Your request has been submitted.");
      // setFormData({
      //   name: "",
      //   email: "",
      //   phone: "",
      //   product: "",
      //   quantity: "",
      //   message: "",
      // });
      // // if (setFormVisible) setFormVisible(false);
      navigate("/thank-you");
    } else {
      alert(result.message || "❌ Something went wrong.");
      navigate("/errorpage");
    }

  } catch (error) {
    // ✅ Network Error Catch
    console.error("❌ API call failed:", error);
    alert("❌ Unable to connect to server. Please try again.");
    navigate("/errorpage");
  } finally {
    setLoading(false);
  }
};




  return (
    <>
{/* for SEO */}
{/* <Helmet>
  <title>Buy Premium Aquaculture Fish Farming Cages, Aquaculture Sport, Water Tourism in India | Aquaculture Cage Experts &ndash; Star Multiventure</title>
   <link rel="preload" as="image" href="/kodar.webp" imagesrcset="/kodar-mobile.webp 600w, /kodar.webp 1200w" imagesizes="(max-width: 768px) 600px, 1200px"/>

  <meta name="description" content="Discover premium fish farming cages, HDPE pontoons & floating jetties by Star Multiventure – trusted across India for aquaculture solutions. Get a quote now!" />
  <meta name="keywords" content="premium aquaculture fish farming cages, HDPE pontoons floating jetties, Star Multiventure India, cage culture technology, aquaculture equipment suppliers, fish farming solutions" />

 
  
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Premium Aquaculture Fish Farming Cage",
      image: "https://starsupplierss.com/images/cage.jpg",
      description:
        "We offer floating jetty, circular cage, and HDPE pontoon cage for professional aquaculture projects in India.",
      brand: {
        "@type": "Brand",
        name: "Star Multiventure",
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: "45000",
        availability: "https://schema.org/InStock",
      },
    })}
  </script>

  
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a fish farming cage?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A cage used for aquaculture is a floating structure in which fish are raised in natural water bodies such as lakes or rivers.",
          },
        },
        {
          "@type": "Question",
          name: "Which fish is suitable for cage culture?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Popular fish include Tilapia, Pangasius, Rohu, and Sea Bass depending on the salinity and water depth.",
          },
        },
      ],
    })}
  </script>
</Helmet> */}
<SeoSchema/>

<section>
      {/* OPTIMIZED VIDEO HERO SECTION */}
<div className="relative w-screen overflow-hidden h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] xl:h-[950px] custom-responsive video">
        {/* Optimized poster image for LCP */}
        <img
          src="/kodar.webp"
          alt="Premium Aquaculture Fish Farming Cage - Star Multiventure"
          className="absolute top-0 left-0 w-full h-full object-cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          width="1200"
          height="600"
          srcSet="/kodar.webp 1200w, /kodar-mobile.webp 600w"
          sizes="(max-width: 768px) 600px, 1200px"
          object-fit:cover
        />
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000"
          autoPlay
          loop
          muted
          alt="Premium Aquaculture Fish Farming Cage - Star Multiventure"
          playsInline
          preload="metadata"
          poster="/kodar.webp, /kodar-mobile.webp"
          onCanPlay={(e) => {
            e.target.style.opacity = '1';
          }}
        >
          <source src="/Web01.webm" type="video/webm" />
          <source src="/Web01.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-4 sm:p-6 md:p-10 bg-black/30">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-montserrat font-bold drop-shadow-lg">
            Unleash Aquatic Excellence with our <br />
            Premium Aquaculture Fish Farming Cage
          </h1>
          <button
            className="mt-2 sm:mt-4 bg-yellow-400 text-black px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-bold hover:bg-yellow-500 transition"
            onClick={handleButtonClick}
          >
            Get A Quote!
          </button>
        </div>
      </div>

      {/* POP-UP FORM */}
  <AnimatePresence>
  {isFormVisible && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="relative bg-white p-6 rounded-lg shadow-lg w-96"
      >
        <button
          className="absolute top-3 right-4 text-3xl text-gray-500 hover:text-yellow-600"
          onClick={handleCloseForm}
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4">Request a Quote</h2>

        <form onSubmit={handleSubmit} noValidate>
          {["name", "email", "phone", "product", "quantity", "message"].map((field) => {
            const fieldId = `home-form-${field}`;
            return (
              <div key={field} className="mb-4">
                <label 
                  htmlFor={fieldId}
                  className="block text-gray-700 mb-2 capitalize font-medium"
                >
                  {field === "product" ? "Product Type" : field}
                  {["name", "email", "phone"].includes(field) && (
                    <span className="text-red-500 ml-1" aria-label="required">*</span>
                  )}
                </label>

                {/* Conditional Dropdown for 'product' field */}
                {field === "product" ? (
                  <select
                    id={fieldId}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    aria-describedby={`${fieldId}-help`}
                  >
                    <option value="">Select a product</option>
                    <option value="Floating Jetty">Floating Jetty</option>
                    <option value="Cage Farming System">Cage Farming System</option>
                    <option value="Floating Restaurant">Floating Restaurant</option>
                    <option value="Pump Platform">Pump Platform</option>
                    <option value="Custom Solution">Custom Solution</option>
                  </select>
                ) : (
                  <input
                    id={fieldId}
                    type={field === "email" ? "email" : field === "phone" ? "tel" : field === "quantity" ? "number" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    placeholder={`Enter your ${field}`}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required={["name", "email", "phone"].includes(field)}
                    aria-describedby={`${fieldId}-help`}
                    {...(field === "email" && { "aria-invalid": formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) })}
                    {...(field === "phone" && { pattern: "[0-9]{10}", maxLength: 10 })}
                    {...(field === "message" && { as: "textarea", rows: 3 })}
                  />
                )}
                
                {/* Help text */}
                <div id={`${fieldId}-help`} className="text-xs text-gray-500 mt-1">
                  {field === "email" && "We'll use this to send you updates"}
                  {field === "phone" && "10-digit mobile number"}
                  {field === "quantity" && "Number of units needed"}
                </div>
              </div>
            );
          })}
          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
      {/* OTHER SECTIONS */}
      <Hero01 />
      <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-lg"></div>}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-lg"></div>}>
        <AchievementTestimonial />
      </Suspense>
      
      </section>
       {/* ENHANCED CONTENT SECTION WITH INTERNAL LINKS */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              India's Leading Aquaculture Equipment Manufacturer
            </h2>
            <p className="text-md text-gray-700 leading-relaxed mb-8">
              At Star Multiventure Pvt. Ltd., we don&apos;t just build HDPE fish farming cages, floating jetties, and pontoon systems — we build trust with every solution we deliver. With over 10 years of hands-on experience in the aquaculture space, we&apos;ve been working closely with fish farmers across India to make their operations more sustainable, efficient, and profitable. Our equipment is built to last, designed to thrive in tough marine conditions, and crafted to support the growing dreams of India&apos;s blue economy.
            </p>
            <div className="flex flex-wrap justify-center gap-4 ">
              <Link to="/products" className="bg-[#f1b400] text-black  px-6 py-3 rounded-lg hover:bg-black hover:text-white transition duration-300">
                Explore Our Products
              </Link>
              <Link to="/services" className="bg-[#f1b400] text-black  px-6 py-3 rounded-lg hover:bg-black hover:text-white transition duration-300">
                Our Services
              </Link>
              <Link to="/contactus" className="bg-[#f1b400] text-black  px-6 py-3 rounded-lg hover:bg-black hover:text-white transition duration-300">
                Get Quote
              </Link>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 will-change-transform transition-transform duration-300 hover:scale-105" style={{transform: 'translateZ(0)'}}>
              <h2 className="text-xl font-semibold text-black mb-4">Premium Products</h2>
              <p className="text-gray-700 mb-4">
                Discover our comprehensive range of HDPE fish farming cages, floating jetties, and aquaculture accessories. 
                All products are manufactured with premium-grade materials for maximum durability.
              </p>
              <Link to="/products" className="text-black hover:underline font-semibold">
                View All Products →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 will-change-transform transition-transform duration-300 hover:scale-105" style={{transform: 'translateZ(0)'}}>
              <h2 className="text-xl font-semibold text-black mb-4">Expert Services</h2>
              <p className="text-gray-700 mb-4">
                From 24/7 customer support to on-site technical visits, we provide comprehensive services to ensure 
                your aquaculture project's success with 5-year warranty coverage.
              </p>
              <Link to="/services" className="text-black hover:underline font-semibold">
                Learn About Services →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 will-change-transform transition-transform duration-300 hover:scale-105" style={{transform: 'translateZ(0)'}}>
              <h2 className="text-xl font-semibold text-black mb-4">Success Stories</h2>
              <p className="text-gray-700 mb-4">
                Read about successful aquaculture projects across India and see how our equipment has helped 
                farmers achieve remarkable results in fish farming operations.
              </p>
              <Link to="/success-story" className="text-black hover:underline font-semibold">
                View Success Stories →
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg will-change-transform transition-transform duration-300 hover:scale-105" style={{transform: 'translateZ(0)'}}>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Why Choose Star Multiventure?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-black text-2xl mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Premium HDPE Construction</h3>
                    <p className="text-gray-600">UV-resistant, corrosion-proof materials built for marine environments</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-black text-2xl mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Nationwide Delivery</h3>
                    <p className="text-gray-600">Serving aquaculture farms across all states of India</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-black text-2xl mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Expert Technical Support</h3>
                    <p className="text-gray-600">24/7 customer service and on-site installation guidance</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-black text-2xl mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">5-Year Warranty</h3>
                    <p className="text-gray-600">Comprehensive warranty coverage on all HDPE products</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-black text-2xl mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Custom Solutions</h3>
                    <p className="text-gray-600">Tailored equipment sizing and configuration for your needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-black text-2xl mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Proven Track Record</h3>
                    <p className="text-gray-600">Over a decade of successful aquaculture installations</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 mt-8 md:flex-row">
            <Link
              to="/aboutus"
              className="bg-[#f1b400] text-black px-8 py-3 rounded-lg hover:bg-black hover:text-white transition duration-300"
            >
              Learn More About Us
            </Link>
            <Link
              to="/gallery"
              className="bg-[#f1b400] text-black px-8 py-3 rounded-lg hover:bg-black hover:text-white transition duration-300"
            >
              View Our Projects
            </Link>
          </div>
          </div>
        </div>
      </section>
      <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-lg"></div>}>
        <BlogsFAQs />
      </Suspense>
    </>
  );
};

export default Home;
