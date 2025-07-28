import { useState } from "react";

export default function ImageGallery({ images }) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails: below on mobile, left on desktop */}
      <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-y-auto md:h-[500px]">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`thumb-${idx}`}
            onClick={() => setMainImage(img)}
            className={`w-16 h-16 object-cover rounded cursor-pointer border ${
              mainImage === img ? "border-orange-500" : "border-gray-300"
            } hover:border-orange-500`}
          />
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1">
        <img
          src={mainImage}
          alt="main"
          className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow"
        />
      </div>
    </div>
  );
}
