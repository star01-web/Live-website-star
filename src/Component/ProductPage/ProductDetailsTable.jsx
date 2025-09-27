import React, { useEffect, useState } from "react";
import productDetailsData from "./ProductDetailsData";
import { useParams, Link } from "react-router-dom";

const ProductDetailsTable = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  function generateSlug(text) {
    if (!text) return "";
    return String(text)
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s.-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  }

  useEffect(() => {
    const found = productDetailsData.find(
      (item) => generateSlug(item.slogan || item.title || "") === slug
    );
    setProduct(found || null);
  }, [slug]);

  useEffect(() => {
    if (product) window.scrollTo(0, 0);
  }, [product]);

  if (!product) {
    return (
      <div className="p-6">
        <p className="text-gray-700">Product not found.</p>
        <Link to="/" className="text-blue-600 underline mt-4 inline-block">
          Back to products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT: Product Images */}
        <div className="space-y-4 pt-36">
          {product.image && typeof product.image === "string" && (
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[400px] object-contain rounded-xl shadow-lg"
            />
          )}

          {product.extraImages && product.extraImages.length > 0 && (
            <div className="grid grid-cols-3 gap-3">
              {product.extraImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${product.title}-${idx}`}
                  className="w-full h-32 object-cover rounded-lg shadow"
                />
              ))}
            </div>
          )}
        </div>

        {/* RIGHT: Product Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-700">
            {product.title}
          </h2>

          <p className="text-lg text-gray-600">{product.slogan}</p>

          {/* Price */}
          {product.price && (
            <p className="text-2xl font-semibold text-green-700">
              ₹ {product.price} {product.unit ? `/ ${product.unit}` : ""}
            </p>
          )}

          {/* Specification Table */}
          <div className="border rounded-xl p-4 bg-gray-50 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Specifications</h3>
            <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
              <tbody>
                <tr>
                  <td className="border px-4 py-2 font-semibold">Brand</td>
                  <td className="border px-4 py-2">
                    {product.brand || "-"}
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold">Material</td>
                  <td className="border px-4 py-2">{product.material || "-"}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold">Color</td>
                  <td className="border px-4 py-2">
                    {Array.isArray(product.color)
                      ? product.color.join(", ")
                      : product.color || "-"}
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold">Category</td>
                  <td className="border px-4 py-2">{product.category || "-"}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold">Size</td>
                  <td className="border px-4 py-2">{product.size || "-"}</td>
                </tr>
               {product.thickness && product.thickness.toLowerCase() !== "black" && (
                <tr>
                  <td className="border px-4 py-2 font-semibold">Thickness</td>
                  <td className="border px-4 py-2">{product.thickness}</td>
                </tr>
                 )}
                 {product.shape && product.shape.toLowerCase() !== "black" &&(
                <tr>
                  <td className="border px-4 py-2 font-semibold">Shape</td>
                  <td className="border px-4 py-2">{product.shape || "-"}</td>
                </tr>)}
                <tr>
                  <td className="border px-4 py-2 font-semibold">
                    Country of Origin
                  </td>
                  <td className="border px-4 py-2">
                    {product.countryOfOrigin || "-"}
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold">
                    Availability
                  </td>
                  <td className="border px-4 py-2">
                    {product.stock
                      ? typeof product.stock === "string" &&
                        product.stock.toLowerCase().includes("in stock")
                        ? "In Stock"
                        : product.stock
                      : "-"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Description</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              {product.shortDescription1 ||
                product.shortDescription2 ||
                "-"}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {product.longDescription1 || product.longDescription2 || "-"}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link to='/contactus'><button className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700">
              Get Latest Price
            </button></Link>
            <Link to ="/products"><button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
              Get More Product
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsTable;
