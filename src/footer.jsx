import React from "react";
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden mx-auto flex flex-col md:flex-row items-center md:justify-between p-6 md:p-10 text-sm md:text-lg text-center md:text-left">
      <div className="space-y-4 mb-4 md:mb-0">
        <h3 className="text-2xl text-gray-200 font-semibold">
          <a
            href="https://levelupzed.com"
            target="_blank"
            className="hover:underline"
          >
            LEVEL UP
          </a>
        </h3>
        <div className="flex justify-center md:justify-start gap-6 text-gray-400 text-3xl">
          <a href="https://www.facebook.com/Levelupzed" target="_blank">
            <FaFacebookSquare />
          </a>
          <a href="https://www.instagram.com/levelupzed_" target="_blank">
            <FaInstagram />
          </a>
          <a href="https://x.com/levelupzed" target="_blank">
            <FaXTwitter />
          </a>
          <a href="https://wa.me/260965807163?text=" target="_blank">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <p className="text-gray-400">
        LEVEL UP &copy; {new Date().getFullYear()} | All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
