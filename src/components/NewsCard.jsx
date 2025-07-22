import React from "react";
import { IoTimeOutline } from "react-icons/io5";
import { FiArrowRight } from "react-icons/fi";
import BreakingNews from "../assets/Breaking.jpg"
import { Link } from "react-router-dom";
const NewsCard = ({ news }) => {
  return (
    <div className="bg-gradient-to-br bg-[#292524] text-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-[#44403c] border-opacity-30">
      {/* Image with hover zoom effect */}
      <div className="h-48 overflow-hidden">
        <img
          src={
            news.image_url ||
           BreakingNews //Fall back image
          }
          alt={news.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title with hover color change */}
        <h2 className="text-xl font-bold mb-3 group-hover:text-amber-300 transition-colors duration-300 line-clamp-2">
          {news.title}
        </h2>

        {/* Source and date */}
        <div className="flex justify-between items-center mb-4 text-sm text-gray-400">
          <span className="px-2 py-1 bg-amber-900 bg-opacity-20 rounded-md">
            {news.source}
          </span>
          <div className="flex items-center">
            <IoTimeOutline className="mr-1" />
            {news.date}
          </div>
        </div>

        {/* Read More button with animated arrow */}
       <Link
  to={`/news/${encodeURIComponent(news.title)}`}
  state={{ news }}
  className="group flex items-center text-amber-400 hover:text-amber-300 transition-colors duration-300 font-medium"
>
  Read More
  <FiArrowRight className="ml-2 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
</Link>
      </div>
    </div>
  );
};

export default NewsCard;
