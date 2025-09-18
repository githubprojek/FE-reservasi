import React from "react";
import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialMedia = () => {
  return (
    <div className="flex items-center justify-center my-5 space-x-3 text-blue-600 text-xl">
      <span className="uppercase text-[10px] text-black font-light">Share</span>

      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebookF className="hover:text-blue-800 transition" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn className="hover:text-blue-800 transition" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaXTwitter className="hover:text-black transition" />
      </a>
      <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
        <FaPinterestP className="hover:text-red-600 transition" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="hover:text-pink-500 transition" />
      </a>
    </div>
  );
};

export default SocialMedia;
