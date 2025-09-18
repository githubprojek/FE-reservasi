import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"; // ganti Link -> NavLink
import logo from "../assets/logo-lemaridien.png";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/location", label: "Location" },
  { to: "/accomodation", label: "Accommodation" },
  { to: "/facilities", label: "Facilities" },
  { to: "/gallery", label: "Gallery" },
];

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const navigasi = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Wrapper untuk Logo & Book Now saat tidak sticky */}
      <div className="absolute top-0 left-0 right-0">
        <div className="relative w-full h-[120px] ">
          {/* Logo di tengah */}
          <NavLink to="/" className="absolute left-1/2 top-0 -translate-x-1/2 z-19">
            <img src={logo} alt="Hotel Logo" className="h-20 sm:h-28 w-auto object-contain" />
          </NavLink>
          {/* Tombol Book Now */}
          <NavLink to="/available-room" target="_blank" className={`${isSticky ? "fixed top-0 right-0" : "absolute right-0 top-4"} z-[50]`}>
            <Button>Book Now</Button>
          </NavLink>
        </div>
      </div>

      {/* Navbar menu */}
      <div
        className={`z-20 ${
          isSticky ? "fixed py-1 top-0 left-0 right-0 bg-white text-black shadow-md w-full" : "absolute top-[120px] left-1/2 -translate-x-1/2  bg-[rgba(248,250,252,0.5)] text-black w-max"
        } px-1 transition-colors duration-300 `}
      >
        <nav className="flex items-center justify-center gap-6 ">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `px-2 py-1 font-light duration-300 ${
                  isActive
                    ? "text-blue-400 font-bold" // aktif -> biru + bold
                    : "hover:text-blue-400 hover:font-bold"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
