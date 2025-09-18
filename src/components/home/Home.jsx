import React from "react";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Review from "./Review";

const Home = () => {
  return (
    <div className="space-y-10">
      <Hero />
      <AboutUs />
      <Review />
    </div>
  );
};

export default Home;
