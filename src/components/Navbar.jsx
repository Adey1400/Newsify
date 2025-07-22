import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaNewspaper } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";


 
  return (
    <nav className="bg-gradient-to-r from-[#1c1917] to-[#1c1917] text-white p-4 shadow-lg border-b border-[#44403c] border-opacity-10">
  <div className="container mx-auto flex flex-col gap-3 sm:gap-0 sm:flex-row items-center justify-between">
    {/* Logo */}
    <div className="flex items-center space-x-2">
      <FaNewspaper className="text-2xl" />
      <span className="text-xl sm:text-2xl font-bold tracking-tight">Newisfy</span>
    </div>

    {/* Home Button (conditionally rendered) */}
    {!isHome && (
      <button
        onClick={() => navigate("/")}
        className="bg-gray-600 hover:bg-gray-500 hover:text-[#292524] text-white px-4 py-2 rounded-xl text-sm font-semibold transition"
      >
        Go to Home
      </button>
    )}
  </div>
</nav>

  );
};

export default Navbar;
