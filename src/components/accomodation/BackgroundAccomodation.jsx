import React from "react";
import pemandangan from "../../assets/pemandangan2.jpg";

const BackgroundAccomodation = () => {
  return (
    <div className="relative z-1">
      {/* Tulisan di tengah */}
      <div className="absolute top-1/2 left-1/2 z-1 -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-4xl md:text-4xl font-light ">
          Welcome to <span className="italic"> Le' Maridien</span>
        </h1>
        <p className="text-lg md:text-xl mt-2 font-extralight">Best Hotel in Jakarta</p>
      </div>
      <div>
        <img src={pemandangan} alt="Slide 1" className="object-cover h-[100vh] w-full" />
      </div>
    </div>
  );
};

export default BackgroundAccomodation;
