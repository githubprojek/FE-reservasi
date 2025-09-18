import React from "react";
import pemandangan from "../../assets/pemandangan.jpg";
import pemandangan2 from "../../assets/pemandangan2.jpg";
import pemandangan3 from "../../assets/pemandangan3.jpg";
import pemandangan4 from "../../assets/pemandangan4.jpg";
import pemandangan5 from "../../assets/pemandangan5.jpg";
import pemandangan6 from "../../assets/pemandangan6.jpg";

const images = [pemandangan, pemandangan2, pemandangan3, pemandangan4, pemandangan5, pemandangan6];

const GalleryPhoto = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 mb-20 text-center text-black pt-[200px]">
      {/* Title */}
      <h1 className="text-3xl mb-6 font-light">
        Photo Gallery
        <hr className="w-24 mt-2 mx-auto border-gray-800" />
      </h1>

      {/* Grid gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden  shadow-md group">
            <img src={img} alt={`gallery-${index}`} className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500 ease-in-out" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPhoto;
