import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ProductsSEO from "./ProductSeo";
import productDetailsData from "./ProductPage/ProductDetailsData";
import SeoSchema from "./SeoSchema";
// import QuotationForm from "./GetQuoteForm";

// Additional sample product entries removed for lint-safety — keeping the file clean of non-ASCII whitespace and long commented blocks.
  const slugs = (slogan) => {
    return slogan
      .toLowerCase()              // lowercase
      .trim()                     // remove spaces around
      .replace(/[^a-z0-9\s.-]/g, "") // remove special chars
      .replace(/\s+/g, "-");      // replace spaces with -
  }
const Products = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [expandedIds, setExpandedIds] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleButtonClick = () => setFormVisible(true);
  const handleCloseForm = () => setFormVisible(false);

  const toggleExpand = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

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
  if (!name || !email || !phone) {
    alert(" Please fill in Name, Email, and Phone.");
    return;
  }

  const phoneRegex = /^[6-9]\d{9}$/;
  if (!phoneRegex.test(phone)) {
    alert(" Please enter a valid 10-digit Indian phone number.");
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
      const rawText = await responseClone.text(); // Fallback
      console.error(" Invalid JSON returned from server.", jsonError);
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
      // if (setFormVisible) setFormVisible(false);
      navigate("/thank-you");
    } else {
      alert(result.message || " Something went wrong.");
      navigate("/errorpage");
    }

  } catch (error) {
    // ✅ Network Error Catch
    console.error(" API call failed:", error);
    alert(" Unable to connect to server. Please try again.");
    navigate("/errorpage");
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    
    <>
    
    {/* <ProductsSEO productData={productDetailsData} /> */}
    <SeoSchema/>

      <div className="pt-[48px]">
        <h1 className="text-4xl font-bold text-center text-black mt-20 mb-8">
          Our Products
        </h1>        
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 px-4 py-4">
        
          {productDetailsData.map((product, index) => {
            const slug = slugs(product.slogan); // 👈 generate slug per product
            console.log({slug});
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: Math.min(index * 0.05, 0.3),
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-md overflow-hidden hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
              >
                {/* Image */}
                <div className="w-full md:w-1/2 h-80">
                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 p-6 space-y-4 text-center md:text-left">
                  <h2 className="text-2xl font-bold text-gray-800">
                    <Link to={`/products/${slug}`}>{product.title}</Link>
                  </h2>

                  <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 text-sm font-semibold rounded-full">
                    {product.slogan}
                  </span>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {expandedIds.includes(product.id)
                      ? product.shortDescription1
                      : `${product.shortDescription1.substring(0, 120)}...`}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {expandedIds.includes(product.id)
                      ? product.shortDescription2
                      : `${product.shortDescription2.substring(0, 120)}...`}
                  </p>

                  <button
                    className="text-sm text-blue-600 underline focus:outline-none"
                    onClick={() => toggleExpand(product.id)}
                  >
                    {expandedIds.includes(product.id) ? "See Less" : "See More"}
                  </button>

                  {/* Buttons */}
                  <div className="flex flex-col items-center md:items-start space-y-3 mt-4">
                    <button
                      className="w-[280px] px-4 py-2 bg-black text-white rounded-md hover:bg-orange-600 transition"
                      onClick={handleButtonClick}
                    >
                      Get Quote
                    </button>
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="w-[280px] px-4 py-2 bg-black text-white rounded-md hover:bg-orange-600 transition">
                        Product Details
                      </button>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
      </div>

      {/* Quote Form Modal */}
      <AnimatePresence>
        {isFormVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 pt-40 z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4 sm:mx-auto max-h-[80vh] overflow-y-auto"
            >
              <button
                className="absolute top-3 right-4 text-3xl text-gray-500 hover:text-yellow-600"
                onClick={handleCloseForm}
              >
                ×
              </button>

              <h2 className="text-xl font-semibold mb-4">Request a Quote</h2>

              <form onSubmit={handleSubmit}>
                {[
                  { name: "name", label: "Name", type: "text" },
                  { name: "email", label: "Email", type: "email" },
                  { name: "phone", label: "Phone", type: "text" },
                ].map((field) => (
                  <div className="mb-4" key={field.name}>
                    <label className="block text-gray-700 mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={`Your ${field.label}`}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                ))}

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Product</label>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="" disabled>
                      Select Product
                    </option>
                    <option value="Floating Jetty">Floating Jetty</option>
                    <option value="Circular Cage">Circular Cage</option>
                    <option value="HDPE Pontoon Cage">
                      HDPE Pontoon Cage
                    </option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Quantity</label>
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="Quantity"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
  
    </>
  );
};

export default Products;
