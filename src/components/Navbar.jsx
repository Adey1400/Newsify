import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaNewspaper } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [searchQuery , setSearchQuery]= useState("")
  const handleSearch =()=>{
   if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  }
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };
  return (
    <nav className="bg-gradient-to-r bg-[#1c1917] text-white p-4 shadow-lg  border-b border-[#44403c] border-opacity-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <FaNewspaper className="text-2xl" />
          <span className="text-2xl font-bold tracking-tight">Newisfy</span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-1 mb-4 md:mb-0">
          {["All", "Tech", "Sports", "Business"].map((item) => (
            <a
              key={item}
              href="#"
              className="px-4 py-2 rounded-lg transition-all duration-300 hover:bg-amber-800 hover:bg-opacity-20 hover:scale-105 font-medium"
            >
              {item}
            </a>
          ))}
        </div>
        <div>
          {!isHome && (
            <button
              onClick={() => navigate("/")}
              className="bg-gray-600 hover:text-[#292524] text-white px-4 py-2 rounded-xl text-sm font-semibold transition"
            >
              Go to Home
            </button>
          )}
        </div>
        {/* Search */}
        <div className="relative w-full md:w-auto">
          <div className="flex items-center">
            <input
              type="search"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e)=>setSearchQuery(e.target.value)}
              className="py-2 px-4 pr-10 rounded-full text-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 w-full md:w-64 transition-all duration-300"
            />
            <button onClick={handleSearch} className="absolute right-3 text-gray-500 hover:text-[#292524] transition-colors duration-300">
              <FiSearch className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
