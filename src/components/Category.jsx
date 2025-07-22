import React from "react";


const Category = ({ selectedCategory, onSelectCategory }) => {
  const categories = [
    "All",
    "Tech",
    "Sports",
    "Business",
    "Health",
    "Entertainment",
    "World",
    "Politics",
    "Science",
    "Tourism",
  ];

  return (
   <div className="w-full mb-6 overflow-x-auto">
  <div className="flex w-max gap-3 px-2 py-2 animate-scroll">
    {categories.map((cat) => (
      <button
        key={cat}
        onClick={() => onSelectCategory(cat)}
        className={`px-4 py-2 rounded-full text-sm transition whitespace-nowrap
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
</div>

  );
};

export default Category;
