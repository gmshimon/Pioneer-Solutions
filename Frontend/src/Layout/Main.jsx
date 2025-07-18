import React, { useState } from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { FaPhoneAlt, FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const Main = () => {
    const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="relative">
      <Navbar />
      <Outlet />
      {isHomePage && (
        <div className="fixed bottom-4 right-4 z-[9999] flex flex-col-reverse items-center group">
      {/* Main FAB */}
      <button
        className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-green-600 text-white flex items-center justify-center shadow-lg hover:bg-green-700 transition duration-200 focus:outline-none"
        aria-label="Contact Us"
        onClick={() => setOpen((prev) => !prev)}
      >
        <FaMessage size={28} className="md:size-[30px]" />
      </button>

      {/* Child buttons: visible on hover (desktop) or open (mobile) */}
      <div
        className={`
          flex flex-col items-center space-y-2 md:space-y-3 mb-2
          transition-opacity duration-300
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
          group-hover:opacity-100 group-hover:pointer-events-auto
        `}
      >
        <a
          href="https://wa.me/+8801345661988"
          target="_blank"
          rel="noopener"
          className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition"
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={24} className="md:size-[30px]" />
        </a>
        <a
          href="https://m.me/PioneerSolutions.bd"
          target="_blank"
          rel="noopener"
          className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg hover:bg-blue-600 transition"
          aria-label="Messenger"
        >
          <FaFacebookMessenger size={24} className="md:size-[30px]" />
        </a>
      </div>
    </div>
      )}
      <div className="max-w-7xl mx-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Main;
