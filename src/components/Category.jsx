import React from "react";

const Category = ({ selectedCategory, onSelectCategory }) => {
  const categories = ["All", "Tech", "Sports", "Business"];

  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelectCategory(cat)}
          className={`px-4 py-2 rounded-full transition 
            ${
              selectedCategory === cat
                ? "bg-amber-800 text-white"
                : "bg-amber-900 bg-opacity-20 text-white hover:bg-opacity-40"
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Category;
