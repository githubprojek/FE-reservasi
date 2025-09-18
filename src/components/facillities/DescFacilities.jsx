import React, { useEffect } from "react";
import pemandangan5 from "../../assets/pemandangan5.jpg";
import { useFacilitiesStore } from "./useFacilitiesStore";

const DescFacilities = () => {
  const { fasilitasList, fetchFacilities } = useFacilitiesStore();

  useEffect(() => {
    fetchFacilities();
  }, []);

  return (
    <div className="relative w-full px-6 py-10">
      {/* Flex container untuk gambar */}
      <h1 className="text-3xl mb-4 font-light italic text-center">
        Facilities
        <hr className="w-20 mt-1 mx-auto border-gray-600 mb-16" />
      </h1>
      <div className="flex flex-row items-stretch w-full gap-6">
        {/* Gambar kiri */}
        <div className="w-1/2 h-full">
          <img src={pemandangan5} alt="pemandangan" className="w-full h-full object-cover" />
        </div>

        {/* Teks kanan */}
        <div className="pl-70 w-1/2 bg-gray-100 p-12 backdrop-blur flex flex-col justify-center h-full">
          <h1 className="uppercase font-light text-3xl mb-4">Facilities & Service</h1>
          <p className="text-justify leading-relaxed">
            {fasilitasList &&
              fasilitasList.map((item, index) => {
                return (
                  <span key={index} className="block">
                    {index + 1}. {item.name || "-"}
                  </span>
                );
              })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DescFacilities;
