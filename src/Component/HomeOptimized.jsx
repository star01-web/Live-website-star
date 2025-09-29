import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Hero01 from "./Hero01";
import AboutSection from "./AboutSection";
import AchievementTestimonial from "./AchievementsTestimonials";
import BlogsFAQs from "./BlogsFAQs";
import '../styles/optimized.css';
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [_jsonError] = useState(null);
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

    if (!name || !email || !phone) {
      alert("⚠️ Please fill in Name, Email, and Phone.");
      return;
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      alert("⚠️ Please enter a valid 10-digit Indian phone number.");
      return;
    }

    setLoading(true);

    try {
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

      const responseClone = response.clone();

      let result;
      try {
        result = await response.json();
      } catch (jsonError) {
        const rawText = await responseClone.text();
        console.error("Invalid JSON returned from server.", jsonError);
        console.error("Raw response:", rawText);
        alert("Something went wrong. Please try again later.");
        navigate("/errorpage");
        return;
      }

      console.log("✅ Server response:", result);

      if (result.status === "success") {
        alert("✅ Thank you! Your request has been submitted.");
        navigate("/thank-you");
      } else {
        alert(result.message || "❌ Something went wrong.");
        navigate("/errorpage");
      }

    } catch (error) {
      console.error("❌ API call failed:", error);
      alert("❌ Unable to connect to server. Please try again.");
      navigate("/errorpage");
    } finally {
      setLoading(false);
    }
  };

  // Structured data for better SEO
  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Premium Aquaculture Fish Farming Cage",
    image: "https://starsupplierss.com/images/cage.jpg",
    description: "We offer floating jetty, circular cage, and HDPE pontoon cage for professional aquaculture projects in India.",
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
  };

  const faqStructuredData = {
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
  };

  return (
    <>
      <Helmet>
        <title>Buy Premium Aquaculture Fish Farming Cages, Aquaculture Sport, Water Tourism in India | Aquaculture Cage Experts – Star Multiventure</title>
        <meta name="description" content="Discover premium fish farming cages, HDPE pontoons & floating jetties by Star Multiventure – trusted across India for aquaculture solutions. Get a quote now!" />
        <meta name="keywords" content="fish cage, fish feed, fish farming equipment, fish cage net, fish feed price, aerator for fish farming, floating fish feed, aquaculture tank for sale, buy tilapia, buy tilapia fish, aquaculture water pump, fishery aerator, buy tilapia fish online, aerator for fish pond price, buy tilapia online, online aquaculture courses, fish farming net price, net for fish farming, aquaculture equipment suppliers, fish cages for sale, fish breeding net, fish farm tank, fish watch, fish products, aquaculture supplies Australia, fish farm feed, aquaculture technology companies, fish pond plastic tank, candock cubes, buy pontoon boat, ramp dock, pond floats, boating toys, boat boxes, amazon boats, catamaran floating dock, boat fenders on sale, floating inflatable, floating pool boat, lake boat toys, engine boat price, dock supplies near me, drive on floating dock, boat dock supplies, modular dock systems, dock manufacturers, cheapest way to build a floating dock, boat dock supplies near me, floating boat lift systems, candock price, floating pontoon jetty, buy a dock, floating dock companies near me, floating pontoon cubes, commercial floating dock systems, floating pontoon price, best dock systems, floating jetty manufacturers in India, floating swimming platform, floating boat dock prices, boat items, floating dock river, dock flotation near me, boat and dock supplies, modular pontoon system, plastic floating boat, boat ramp lift, dock & marine construction, dock and marine, submersible pump floating pontoon, marina boats near me, boat to boat" />
        
        <script type="application/ld+json">
          {JSON.stringify(productStructuredData)}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
      </Helmet>

      <main>
        {/* Optimized Video Hero Section */}
        <section className="hero-video h-[300px] sm:h-[500px] md:h-[700px] lg:h-[900px] xl:h-[1100px]">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            loading="lazy"
          >
            <source src="/Web01.mp4" type="video/mp4" />
            <img
              src="/your-image.png"
              alt="Aquaculture Farm"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </video>

          <div className="hero-overlay p-4 sm:p-6 md:p-10">
            <h1 className="hero-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Unleash Aquatic Excellence with our <br />
              Premium Aquaculture Fish Farming Cage
            </h1>
            <button
              className="hero-cta"
              onClick={handleButtonClick}
            >
              Get A Quote!
            </button>
          </div>
        </section>

        {/* Optimized Form Modal */}
        <AnimatePresence>
          {isFormVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="form-overlay"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="form-container show"
              >
                <button
                  className="form-close"
                  onClick={handleCloseForm}
                >
                  &times;
                </button>
                <h2 className="text-xl font-semibold mb-4">Request a Quote</h2>

                <form onSubmit={handleSubmit}>
                  {["name", "email", "phone"].map((field) => (
                    <div key={field} className="mb-4">
                      <label className="block text-gray-700 mb-2 capitalize">
                        {field}
                      </label>
                      <input
                        type={field === "email" ? "email" : "text"}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        placeholder={`Your ${field}`}
                        className="form-input"
                        required
                      />
                    </div>
                  ))}

                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Product</label>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="" disabled>
                        Select Product
                      </option>
                      <option value="Floating Jetty">Floating Jetty</option>
                      <option value="Circular Cage">Circular Cage</option>
                      <option value="HDPE Pontoon Cage">HDPE Pontoon Cage</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Quantity</label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="Quantity"
                      className="form-input"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      className="form-input"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="form-submit"
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content Sections */}
        <Hero01 />
        <AboutSection />
        <AchievementTestimonial />
        <BlogsFAQs />
      </main>
    </>
  );
};

export default Home;
