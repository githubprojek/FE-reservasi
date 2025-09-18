import React from "react";
import Paralax from "../Paralax";
import pemandangan4 from "../../assets/pemandangan2.jpg";

const ParalaxFacilities = () => {
  return (
    <Paralax image={pemandangan4} className="h-[100vh] w-full bg-white mb-10">
      {/* overlay full */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* konten di tengah */}
      <div className="relative z-10 h-full w-full flex flex-col items-start ml-10 justify-center space-y-4 text-white font-extralight ">
        <div className="text-6xl w-80 ">
          <h1 className="w-full">Cycladic simplicity & tradition</h1>
        </div>
        <div className="w-80 ml-50">
          <p className="">All apartments, studios and Suites are typical samples of the traditional architecture of Cyclades.</p>
        </div>
      </div>
    </Paralax>
  );
};

export default ParalaxFacilities;
