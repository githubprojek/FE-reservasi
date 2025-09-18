import React from "react";
import pemandangan5 from "../../assets/pemandangan5.jpg";

const DescLocation = () => {
  return (
    <div className="relative w-full px-6 py-10">
      {/* Flex container untuk gambar */}
      <h1 className="text-3xl mb-4 font-light italic text-center">
        Jakarta
        <hr className="w-20 mt-1 mx-auto border-gray-600 mb-16" />
      </h1>
      <div className="flex flex-row w-full h-full gap-6">
        {/* Gambar kiri */}
        <div className="w-1/2 h-full">
          <img src={pemandangan5} alt="pemandangan" className="w-full h-full object-cover " />
        </div>

        {/* Spacer kanan */}
        <div className="w-1/2"></div>
      </div>

      {/* Teks overlay sebagian ke atas gambar */}
      <div className="absolute top-[30%] left-[42%] w-[55%] z-10">
        <div className="bg-white p-12 backdrop-blur">
          <h1 className="uppercase font-light text-xl">Breathtaking view of the city skyline and serene mountain breeze.</h1>
          <p className="text-justify leading-relaxed font-extralight">
            Le Maridien Hotel is nestled in the heart of Jakarta, one of the most vibrant and scenic cities in Indonesia. Just minutes away from iconic shopping streets and culinary spots, Le Maridien offers the perfect blend of urban
            energy and natural charm. All rooms and suites boast a stunning view of the city and the surrounding mountains.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DescLocation;
