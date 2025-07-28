import { link } from "framer-motion/client";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence  } from "framer-motion";
import ProductsSEO from "./ProductSeo";
// import QuotationForm from "./GetQuoteForm";

// Sample product data
const productData = [
  // {
  //   id: 1,
  //   image: "/product/Circular Cage/Square cage sea.jpg",
  //   title: "SQUARE CAGE",
  //   slogan: "SEA CAGE FARMING",
  //   description1: "A mariculture cage, or sea cage, is made up of a frame, net, floats, and other components.",
  //   description2: "Cage aquaculture involves growing fish in existing water while enclosed in a net cage.",
  // },
  //  {
  //   id: 2,
  //   image: "/product/Circular Cage/circle cage sea.jpg",
  //   title: "CIRCULAR CAGE",
  //   slogan: "SEA CAGE FARMING",
  //   description1: "A mariculture cage, or sea cage, is made up of a frame, net, floats, and other components.",
  //   description2: "Cage aquaculture involves growing fish in existing water while enclosed in a net cage.",
  // },
  // {
  //   id: 3,
  //   image:"/cage01.png",
  //   title: "HDPE PONTOON RECTANGLE CAGE",
  //   slogan: "20X20X5",
  //   description1: "Circular cages are net enclosures used to grow fish in reservoirs or the sea.",
  //   description2: "Designed for efficient water circulation and durability, circular cages are preferred worldwide.",
  // },
    { id: 3,
    image:"/product/6X4/img01.webp",
    title: "HDPE PONTOON RECTANGLE CAGE",
    slogan: "Size: 6X4X4",
    description1: "This compact and durable fish cage is designed for efficient aquaculture in lakes, reservoirs, or coastal waters. Made with high-quality HDPE pontoons, it offers strong buoyancy and long-lasting performance.",
    description2: "Strong nets support better water flow, reduce fish stress, and boost productivity. Compatible with modern farming equipment, it's a solid choice for efficient aquaculture operations.",
    link: "https://www.indiamart.com/proddetail/6x4x4-meter-hdpe-aqucacultre-cage-2853147770333.html?sellerpreview=1 "
  },
  {
    id: 4,
    image:"/product/7.5X4/p1.webp",
    title: "HDPE PONTOON RECTANGLE CAGE",
    slogan: "Size: 7.5X4X4",
    description1: "Designed for medium to large-scale fish farming, this cage offers more space and reliable performance in all water conditions. Built with marine-grade HDPE, it ensures durability and fish safety.",
    description2: "Ideal for both offshore and inland use, it supports high-density stocking, strong nets, and works smoothly with modern aquaculture equipment, ensuring high harvest and efficient operations.",
    link: "https://www.indiamart.com/proddetail/7-5x5x4-meter-hdpe-aqucacultre-cage-2853147770488.html?sellerpreview=1 "
  },
  {
    id: 5,
    image: "/product/20X20/p01.webp",
    title: "HDPE PONTOON SQUARE CAGE",
    slogan: "Size: 20X20X5",
    description1: "Built for large-scale commercial fish farming, this spacious and sturdy cage offers excellent stability with durable HDPE pontoons.",
    description2: "Ideal for both offshore and inland use, it supports high-density stocking, strong nets, and works smoothly with modern aquaculture equipment, ensuring high harvest and efficient operations",
    link: "https://www.indiamart.com/proddetail/20x20x4-5-meter-hdpe-aqucacultre-cage-2853149560412.html?sellerpreview=1"
  },
  // {
  //   id: 3,
  //   image: "/cage01.png",
  //   title: "HDPE PONTOON SQUARE CAGE",
  //   slogan: " 7.5X4X4",
  //   description1: "HDPE pontoon cages offer strength, adaptability, and sustainability in modern aquaculture.",
  //   description2: "Ideal for offshore or inland fish farming, they ensure high-yield production.",
  // },
  // {
  //   id: 3,
  //   image: "/cage01.png",
  //   title: "HDPE PONTOON SQUARE CAGE",
  //   slogan: "6X4X4",
  //   description1: "HDPE pontoon cages offer strength, adaptability, and sustainability in modern aquaculture.",
  //   description2: "Ideal for offshore or inland fish farming, they ensure high-yield production.",
  // },
  {
    id: 6,
    image: "/product/jetty/Floating Jetty.webp",
    title: "HDPE Floating Jetty",
    slogan: "Qty: As per your requirement",
    description1: "The HDPE Floating Jetty is a versatile and robust floating structure that provides secure and steady access to bodies of water for multiple applications such as aquaculture, marinas, and leisure activities. Constructed from premium HDPE, it withstands corrosion and adjusts to diverse water environments.",
    description2: "Engineered to adapt to fluctuating water levels, this floating dock is perfect for accessing aquaculture gear, tourism facilities, and waterfront activities. Its adjustable dimensions and straightforward setup provide a dependable option for both business and individual applications.",
    link: "https://www.indiamart.com/proddetail/hdpe-floating-jetty-walkway-2853147771873.html?sellerpreview=1 "
  },
  {
    id: 7,
    image: "/product/restaurant/rest1.webp",
    title: "Floating Restaurant",
    slogan: "Qty: As per your requirement",
    description1: "The Floating Restaurant presents a creative approach to providing a lavish dining experience on water. Built on high-buoyancy pontoons, it merges stability with visual charm, making it ideal for lakes, rivers, and coastal regions.",
    description2: "Perfect for upscale dining, relaxed cafés, or hosting events, this floating eatery elevates any eco-tourism or waterfront establishment. With adjustable size choices, it serves as a unique draw for resorts, aquaculture restaurants, and picturesque locations.",
    link:"https://www.indiamart.com/star-suppliers-bilaspur/products.html"
  },
  {
    id: 9,
    image: "/product/Accessories/hexagonal.webp",
    title: "Hexagonal Single Pontoon" ,
    slogan: "Size: 600x600x500MM",
    description1: "A strong and versatile floating block with a unique hexagonal design for flexible layouts and better load distribution. Made from high-quality HDPE, it resists UV, corrosion, and tough marine conditions",
    description2: "Ideal for floating docks, walkways, fish cages, or leisure platforms, it’s lightweight, easy to connect, and built to last—perfect for creative and durable water structures.",
    link:"https://www.indiamart.com/proddetail/hdpe-hexagonal-floating-docks-pontoon-2853187943173.html?sellerpreview=1"
  },
  {
    id: 10,
    image: "/product/Accessories/Single-pontoon.webp",
    title: "Anti-Skid Single Pontoon" ,
    slogan: "Size: 500x500x400 MM",
    description1: "A sturdy HDPE floating block with a textured, slip resistant top for maximum safety—even when wet. Its one piece design makes it light, easy to handle, and quick to install, yet strong enough to support heavy loads.",
    description2: "Perfect for docks, walkways, swim platforms, and marine workstations where secure footing matters most.",
    link:"https://www.indiamart.com/proddetail/hdpe-floating-pontoon-single-2851238616662.html?sellerpreview=1"
  },
  {
    id: 11,
    image: "/product/Accessories/single-pontoon-top-cover.webp",
    title: "Top Cover Single Pontoon" ,
    slogan: "Size:500 x 500 x 400 MM",
    description1: "A strong HDPE floating block with a reinforced top cover for added durability, load distribution, and a smooth, stable surface. Built to resist UV, corrosion, and harsh weather, it’s ideal for docks, floating stages, and industrial or leisure water setups.",
    description2: "Easy to install and built to last, it offers both protection and a clean, stable finish for any floating platform.",
    link:"https://www.indiamart.com/proddetail/floating-docks-pontoon-with-top-cover-26033550255.html?sellerpreview=1"
  },
  {
    id: 12,
    image: "/product/Accessories/single-zigzag-pontoon.webp",
    title: "Zig-Zag Pontoon" ,
    slogan: "Size: 500 x 500 x 400 MM",
    description1: "This uniquely shaped HDPE pontoon lets you build curved or angled floating paths with ease. Durable, UV- and corrosion-resistant, it’s perfect for resorts, water parks, and creative dock designs.",
    description2: "Its interlocking edges make installation simple and secure—ideal for adding flexibility, style, and stability to any floating structure.",
    link:"https://www.indiamart.com/proddetail/zigzag-floating-pontoon-2853149559897.html?sellerpreview=1"
  },
  {
    id: 13,
    image: "/product/Accessories/nur.webp",
    title: "Nursery Net 6X4X4" ,
    slogan: "Size:12 Ply| Mesh Size: 10 MM | Feed Screen 1M",
    description1: "A strong, UV-stabilised net designed for fish and shrimp nurseries. It offers a safe, well-ventilated space for young stock, protecting them from predators and supporting healthy growth.",
    description2: "Easy to install and built to last, it ensures high survival rates and low maintenance, ideal for efficient nursery operations.",
    link:"https://www.indiamart.com/proddetail/aquaculture-cages-nursery-nets-6x4x4-2856619774148.html?sellerpreview=1"
  },
  {
    id: 14,
    image: "/product/Accessories/nur.webp",
    title: "Nursery Net 7.5X4X4" ,
    slogan: "Size: 12 Ply, Mesh Size: 10 mm, Feed Screen: 1 Meter",
    description1: "Built for efficient nursery management, this durable 12-ply net provides a safe, well-ventilated space for juvenile fish. The 10 mm mesh allows good water flow while securely containing fingerlings.",
    description2: "With a 1-meter feed screen for easy access, it's ideal for hatcheries and nursery stages—ensuring healthy growth and easy handling.",
    link:"https://www.indiamart.com/proddetail/aquaculture-cages-nursery-nets-7-5x4x4-2856619774391.html?sellerpreview=1"
  },
  // {
  //   id: 15,
  //   image: "/product/restaurant/rest1.jpg",
  //   title: "Nursery Net" ,
  //   slogan: "Size: 20X20X5",
  //   description1: "The Floating Restaurant presents a creative approach to providing a lavish dining experience on water. Built on high-buoyancy pontoons, it merges stability with visual charm, making it ideal for lakes, rivers, and coastal regions.",
  //   description2: "Perfect for upscale dining, relaxed cafés, or hosting events, this floating eatery elevates any eco-tourism or waterfront establishment. With adjustable size choices, it serves as a unique draw for resorts, aquaculture restaurants, and picturesque locations.",
  //   link:"https://www.indiamart.com/star-suppliers-bilaspur/products.html"
  // },
  {
    id: 16,
    image: "/product/Accessories/growout-net.webp",
    title: "Grow Out Net 6X4X4" ,
    slogan: "Size: 48 Ply | Mesh Size: 30 MM | Feed Screen 1M",
    description1: "Designed for the grow-out phase, this heavy-duty 48-ply net is ideal for larger fingerlings and adult fish. The 30 mm mesh ensures strong water flow, while the 1-meter feed screen makes feeding easy and low-stress.",
    description2: "Perfect for cage and pond systems, it offers durability, safety, and reliable performance for serious fish farming operations.",
    link:"https://www.indiamart.com/proddetail/aquaculture-cages-growout-nets-6x4x4-2856619739033.html?sellerpreview=1 "
  },
  {
    id: 17,
    image: "/product/Accessories/growout-net.webp",
    title: "Grow Out Net 7.5X4X4" ,
    slogan: "Size: 30 MM | Feed Screen 1M",
    description1: "Ideal for the grow-out stage, this net provides ample space and excellent water flow for healthy fish development. The 30 mm mesh supports maturing fish, while the 1-meter feed screen ensures easy, low-stress feeding.",
    description2: "Durable and reliable, it’s suitable for both pond and cage farming—perfect for promoting strong, steady fish growth.",
    link:"https://www.indiamart.com/proddetail/aquaculture-cages-growout-nets-7-5x4x4-2856619739191.html?sellerpreview=1 "
  },
  {
    id: 18,
    image: "/product/Accessories/growout-net.webp",
    title: "Grow Out Net 20X20X5" ,
    slogan: "Size: 132 Ply | Mesh Size: 45 MM | Feed Screen 1M",
    description1: "Built for large-scale aquaculture, this heavy-duty 132-ply net offers strength, space, and durability for raising mature fish. The 45 mm mesh ensures excellent water flow, while the 1-meter feed screen allows easy, low-stress feeding.",
    description2: "Ideal for cage and pond systems, it’s a reliable choice for effective, long-term fish management in demanding environments.",
    link:"https://www.indiamart.com/proddetail/aquaculture-cages-growout-nets-20x20x4-5-2856619722430.html?sellerpreview=1"
  },
  {
    id: 19,
    image: "/product/Accessories/Bird-protection-net01.webp",
    title: "Bird Net 6X4X4" ,
    slogan: "Size: 18 Ply Mesh | Size: 50 MM | Feed Screen NA",
    description1: "Keep birds away from your fish stock with this lightweight yet durable 18-ply net. The 50 mm mesh offers effective protection while allowing air and light through.",
    description2: "Easy to install and maintain, it’s ideal for ponds, tanks, and nurseries—no feed screen needed for hassle-free coverage.",
    link:"https://www.indiamart.com/proddetail/aquaculture-cages-bird-protection-nets-6x4x4-2856619773655.html?sellerpreview=1 "
  },
  {
    id: 17,
    image: "/product/Accessories/Bird-protection-net01.webp",
    title: "Bird Net 7.5X4X4" ,
    slogan: "Size: 18 Ply | Mesh: 50 mm",
    description1: "This sturdy 18-ply bird net offers reliable protection for aquaculture setups by keeping birds away from your stock. The 50 mm mesh ensures safety without blocking airflow or sunlight.",
    description2: "Lightweight and easy to handle, it’s perfect for ponds, tanks, and nursery systems—simple, effective, and essential for secure fish farming.",
    link:"https://www.indiamart.com/proddetail/aquaculture-cages-bird-protection-nets-7-5x4x4-2856619773733.html?sellerpreview=1 "
  },
  {
    id: 18,
    image: "/product/Accessories/Bird-protection-net01.webp",
    title: "Bird Net 20X20X5" ,
    slogan: "Size: 150 mm | 36-ply mesh ",
    description1: "Built for large-scale protection, this strong 36-ply bird net keeps predators away without blocking air or sunlight. Its wide 150 mm mesh makes it ideal for covering big ponds and aquaculture sites.",
    description2: "Easy to install and low-maintenance, it’s a reliable choice for safeguarding your fish stock across large areas.",
    link:"https://www.indiamart.com/proddetail/aquaculture-cage-bird-protection-net-20x20x4-5-2856814726633.html?sellerpreview=1 "
  },
  {
    id: 19,
    image: "/product/Accessories/nut-bolt.webp",
    title: "Nut and Bolt" ,
    slogan: " Qty: As per your requirement",
    description1: "Made from durable, corrosion-resistant HDPE, these lightweight fasteners are perfect for securing pontoons, cages, nets, and other aquaculture setups.",
    description2: "UV- and chemical-resistant, they offer a rust-free, long-lasting solution for outdoor and aquatic environments—ideal where metal bolts may fail.",
    link:"https://www.indiamart.com/star-suppliers-bilaspur/products.html"
  },
  {
    id: 20,
    image: "/product/Accessories/center-pin.webp",
    title: "Center Pin" ,
    slogan: "Qty: As per your requirement",
    description1: "Made from tough, UV- and corrosion-resistant HDPE, this center pin is built to securely connect modular pontoons and floating structures.",
    description2: "Lightweight, weatherproof, and easy to install, it’s ideal for long-term use in aquaculture, docks, and water platforms—reliable and maintenance-free.",
    link:"https://www.indiamart.com/star-suppliers-bilaspur/products.html"
  },
  {
    id: 21,
    image: "/product/Accessories/hdpe-railing.webp",
    title: "HDPE Railings" ,
    slogan: "Qty: As per your requirement",
    description1: "Durable, UV- and corrosion-resistant, these HDPE railings are built for safety and stability on floating docks, aquaculture platforms, and walkways.",
    description2: "Lightweight and maintenance-free, they’re ideal for marine and outdoor use—offering strong, slip-resistant support in all weather conditions.",
    link:"https://www.indiamart.com/star-suppliers-bilaspur/products.html"
  },
  {
    id: 22,
    image: "/product/Accessories/ss.webp",
    title: "Stainless Steel Railings",
    slogan: "Qty: As per your requirement",
    description1: "Crafted from high-grade stainless steel, these railings offer strong, rust-resistant support for floating docks, pontoons, and aquaculture walkways.",
    description2: "Weatherproof and low-maintenance, they combine durability with a sleek finish—perfect for both functional safety and a polished look in any marine or outdoor setting.",
    link:"https://www.indiamart.com/star-suppliers-bilaspur/products.html"
  },
  
];

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
    <ProductsSEO productData={productData} />

      <div className="pt-[48px]">
        <h1 className="text-4xl font-bold text-center text-black mt-20 mb-12">
          Our Products
        </h1>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 px-4 py-4">
        {productData.map((product, index) => (
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
              <h1 className="text-2xl font-bold text-gray-800">
                {product.title}
              </h1>

              <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 text-sm font-semibold rounded-full">
                {product.slogan}
              </span>

              <p className="text-gray-600 text-sm leading-relaxed">
                {expandedIds.includes(product.id)
                  ? product.description1
                  : `${product.description1.substring(0, 120)}...`}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {expandedIds.includes(product.id)
                  ? product.description2
                  : `${product.description2.substring(0, 120)}...`}
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
        ))}
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
