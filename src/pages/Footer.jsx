import React from "react";

const Footer = () => {
  return (
   <footer className="bg-[#1c1917] text-gray-400 py-6 border-t border-gray-700 mt-10">
  <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
    
    {/* Logo + Tagline */}
    <div>
      <h2 className="text-white text-xl font-bold">Newisfy</h2>
      <p className="text-sm mt-1">Your daily dose of reliable headlines.</p>
    </div>

    {/* Links */}
    <div className="flex flex-wrap justify-center gap-4 text-sm">
      <a href="#" className="hover:text-white transition">Home</a>
      <a href="#" className="hover:text-white transition">About</a>
      <a href="#" className="hover:text-white transition">Contact</a>
    </div>

    {/* Copyright */}
    <div className="text-sm">
      © {new Date().getFullYear()} Newisfy. All rights reserved.
    </div>

  </div>
</footer>

  );
};

export default Footer;
