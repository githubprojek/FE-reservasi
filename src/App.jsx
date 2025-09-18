import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Payment from "./components/payments/Payment";
import Booking from "./components/payments/Booking";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SocialMedia from "./components/SocialMedia";
import Reservasi from "./components/Reservasi";
import Home from "./components/home/Home";
import Location from "./components/location/Location.jsx";
import Accomodation from "./components/accomodation/Accomodation";
import Facilities from "./components/facillities/Facilities";
import DetailRoom from "./components/detailRoom/DetailRoom";
import Gallery from "./components/gallery/Gallery";
import ScrollToTop from "./lib/ScrollToTop.js";
import AvailableRoom from "./components/payments/AvailableRoom.jsx";

const App = () => {
  const location = useLocation();

  const cleanRoutes = ["/booking", "/payment", "/available-room"];

  const isClean = cleanRoutes.some((path) => location.pathname.startsWith(path));
  return (
    <>
      <ScrollToTop />
      {!isClean && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
        <Route path="/accomodation" element={<Accomodation />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/detail-room/:id" element={<DetailRoom />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/available-room" element={<AvailableRoom />} />
        <Route path="/booking/:roomId" element={<Booking />} />
        <Route path="/payment/:reservasiId" element={<Payment />} />
      </Routes>

      {!isClean && (
        <>
          <Reservasi />
          <SocialMedia />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
