import React from "react";

const CardReview = ({ type, title, subtitle, image, description, rating = 5 }) => {
  // Ambil inisial dari nama
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  // Tampilkan bintang sesuai rating
  const renderStars = (count) => {
    return "★".repeat(count) + "☆".repeat(5 - count);
  };

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden w-full max-w-sm text-center">
      {/* Nama customer */}
      {type === "review" && <h2 className="text-xl font-semibold mt-4">{title}</h2>}

      {/* Avatar dengan inisial */}
      {type === "review" && (
        <div className="flex justify-center mt-3">
          <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold">{getInitials(title)}</div>
        </div>
      )}

      {/* Negara / asal */}
      {type === "review" && subtitle && <p className="text-sm text-gray-500 mt-2">{subtitle}</p>}

      {/* Komentar */}
      <div className="px-4 py-2">
        <p className="text-gray-700 text-sm mt-2">{description}</p>
      </div>

      {/* Rating */}
      {type === "review" && <div className="mt-3 mb-4 text-yellow-500 text-lg">{renderStars(rating)}</div>}
    </div>
  );
};

export default CardReview;
