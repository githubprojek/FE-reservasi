import React from "react";
import pemandangan4 from "../assets/pemandangan4.jpg";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Paralax from "../components/Paralax";

const Reservasi = () => {
  const navigasi = useNavigate();

  return (
    <Paralax image={pemandangan4} className="h-[80vh] w-full">
      {/* overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* konten */}
      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center space-y-4 text-white">
        <h1 className="text-6xl font-extralight">MAKE A RESERVATION</h1>
        <Button onClick={() => window.open("/available-room", "_blank")} className="px-10 py-5 font-extralight">
          Book Now
        </Button>
      </div>
    </Paralax>
  );
};

export default Reservasi;
