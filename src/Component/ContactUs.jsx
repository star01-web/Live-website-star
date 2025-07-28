import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async"; 
import { useNavigate } from "react-router-dom";
import ContactPageSchema from "./ContactPageSchema";
import BusinessLocationSchema from "./BusinessLocationSchema";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    message: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  const { name, email, phone, product, quantity, message } = formData;

  // ✅ Basic Validation
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


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
<ContactPageSchema />
<BusinessLocationSchema />


    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-40">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Contact Us
      </h1>
      <p className="text-gray-600 text-center mb-6">
        Have questions about our aquaculture solutions? Reach out to us!
      </p>
      {error && (
        <div className="text-red-500 text-center mb-4">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Mobile Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="+91 Your Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            pattern="[0-9]{10,}"
            inputMode="numeric"
            onKeyDown={(e) => {
              if(!/[0-9]/.test(e.key) && 
              !["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(e.key)){
                e.preventDefault();
              }
            }}
            className="w-full p-2 border rounded mb-2"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Product</label>
          <select
            name="product"
            value={formData.product}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mb-2"
          >
            <option value="">Select Product</option>
            <option value="Floating Jetty">Floating Jetty</option>
            <option value="Circular Cage">Circular Cage</option>
            <option value="HDPE Pontoon Cage">HDPE Pontoon Cage</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Quantity</label>
          <input
            type="text"
            name="quantity"
            placeholder="Quantity"
            value={formData.quantity
}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Message</label>
          <textarea
            name="message"
            placeholder="Write Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
           disabled={loading}
          className={`w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
>
  {loading ? "Sending..." : "Send Message"}
</button>

      </form>
    </div></>
  );
};

export default ContactUs;
