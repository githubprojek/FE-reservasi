import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import pemandangan from "../../assets/pemandangan.jpg";
import pemandangan2 from "../../assets/pemandangan2.jpg";
import pemandangan3 from "../../assets/pemandangan3.jpg";

const Hero = () => {
  return (
    <div className="relative z-1">
      {/* Tulisan di tengah */}
      <div className="absolute top-1/2 left-1/2 z-1 -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-4xl md:text-4xl font-light ">
          Welcome to <span className="italic"> Le' Maridien</span>
        </h1>
        <p className="text-lg md:text-xl mt-2 font-extralight">Best Hotel in Jakarta</p>
      </div>

      <Carousel
        autoPlay
        infiniteLoop
        interval={5000}
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        swipeable
        emulateTouch
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button onClick={onClickHandler} title={label} className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-6xl p-3 rounded-full z-50 transition-all cursor-pointer">
              &#10094;
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button onClick={onClickHandler} title={label} className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-6xl p-3 rounded-full z-50 transition-all cursor-pointer">
              &#10095;
            </button>
          )
        }
      >
        <div>
          <img src={pemandangan} alt="Slide 1" className="object-cover h-[100vh] w-full" />
        </div>
        <div>
          <img src={pemandangan2} alt="Slide 2" className="object-cover h-[100vh] w-full" />
        </div>
        <div>
          <img src={pemandangan3} alt="Slide 3" className="object-cover h-[100vh] w-full" />
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
