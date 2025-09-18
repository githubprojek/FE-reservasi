import React from "react";
import { MdTrain } from "react-icons/md";
import { FaStore, FaBus, FaShoppingCart } from "react-icons/fa";

const distanceInfo = [
  { icon: <MdTrain size={80} className="text-white" />, name: "MRT Station", distance: "100m" },
  { icon: <FaStore size={80} className="text-white" />, name: "Markets", distance: "100m" },
  { icon: <FaBus size={80} className="text-white" />, name: "Bus Stop", distance: "200m" },
  { icon: <FaShoppingCart size={80} className="text-white" />, name: "Mall", distance: "400m" },
];

const Distance = () => {
  return (
    <div className="bg-gray-800 text-white w-full h-[500px] py-12">
      {/* Judul tetap di atas */}
      <h2 className="text-4xl font-light pl-15 my-10">Nearby Access</h2>

      {/* Konten di tengah */}
      <div className="flex flex-col justify-center h-[calc(100%-4rem)]">
        <div className="flex justify-between items-center w-full px-20">
          {distanceInfo.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-3">{item.icon}</div>
              <p className="text-2xl font-extralight mt-4">{item.name}</p>
              <p className="text-sm font-light text-gray-300 mt-10">{item.distance}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Distance;
