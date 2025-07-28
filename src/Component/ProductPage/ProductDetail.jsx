import { useParams } from "react-router-dom";
import { useState } from "react";
import productData from './ProductDetailsData';
import ImageGallery from "./ImageGallery";

export default function ProductDetail() {
  const { id } = useParams();
  const product = productData.find((item) => item.id.toString() === id);

  const [isFormVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: product?.title || "",
    quantity: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("https://starmultiventure.in/admin.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();
    console.log("Server response:", result);

    if (result.status === "success") {
      navigate("/thankyou");  // ✅ success
    } else {
      console.error("Error from server:", result.message);
      navigate("/errorpage");     // ❌ failed from server
    }
  } catch (error) {
    console.error("API call failed:", error);
    navigate("/errorpage");       // ❌ fetch failed
  }
};

  const handleCloseForm = () => {
    setFormVisible(false);
  };

  if (!product) return <div className="p-6">Product not found</div>;

  return (
    <>
      <div className="pt-[255px] m-4 flex flex-col md:flex-row items-start gap-6 ">
        <div className="w-full md:w-1/2">
          <ImageGallery images={product.images} alt = {product.title} />
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <h2 className="text-lg italic text-orange-600 mb-4">{product.slogan}</h2>
          <p className="mb-2">{product.description1}</p>
          <p className="mb-4">{product.description2}</p>
          <button
            className="px-4 py-2 bg-black text-white rounded hover:bg-orange-600"
            onClick={() => setFormVisible(true)}
          >
            Get Quote
          </button>
        </div>
      </div>

      {isFormVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 pt-40 z-50">
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4 sm:mx-auto max-h-[80vh] overflow-y-auto">
            <button
              className="absolute top-3 right-4 text-3xl text-gray-500 hover:text-yellow-600"
              onClick={handleCloseForm}
            >
              ×
            </button>
            <h2 className="text-xl font-semibold mb-4">Request a Quote</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Product</label>
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled>Select Product</option>
                  <option value="Floating Jetty">Floating Jetty</option>
                  <option value="Circular Cage">Circular Cage</option>
                  <option value="HDPE Pontoon Cage">HDPE Pontoon Cage</option>
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
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
