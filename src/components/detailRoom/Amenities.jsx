import React, { useEffect } from "react";
import { useFacilitiesStore } from "../facillities/useFacilitiesStore.js";
const Amenities = () => {
  const { fasilitasList, fetchFacilities } = useFacilitiesStore();

  useEffect(() => {
    fetchFacilities();
  }, []);

  return (
    <div className="w-full bg-white p-12 backdrop-blur">
      <h1 className="uppercase font-extralight text-md mb-6 text-center">Amenities</h1>

      {/* list dengan bullet otomatis */}
      <ul className="columns-2 md:columns-3 gap-16 list-disc list-inside text-black leading-relaxed">
        {fasilitasList?.map((item, index) => (
          <li key={index} className="mb-2 break-inside-avoid">
            {item.name || "-"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Amenities;
