import React, { useState } from 'react';
import NewsCard from '../components/NewsCard';
import Category from '../components/Category';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const dummyNews = [
    {
      title: "React 19 Released with New Features",
      description: "React 19 introduces a new compiler and major performance upgrades...",
      image: "https://via.placeholder.com/400x200",
      source: "TechCrunch",
      date: "2025-07-22",
      category: "Tech",
    },
    {
      title: "OpenAI Launches New AI Model",
      description: "The AI world gets shaken up again with OpenAI’s latest innovation...",
      image: "https://via.placeholder.com/400x200",
      source: "Wired",
      date: "2025-07-21",
      category: "Tech",
    },
    {
      title: "India Wins T20 World Cup",
      description: "India clinches the T20 World Cup in a thrilling final match...",
      image: "https://via.placeholder.com/400x200",
      source: "ESPN",
      date: "2025-07-20",
      category: "Sports",
    },
  ];

  // Filter based on selected category
  let filterCategory;
  if (selectedCategory === "All") {
    filterCategory = dummyNews;
  } else {
    filterCategory = dummyNews.filter((news) => news.category === selectedCategory);
  }

  return (
    <div className="bg-[#1c1917] min-h-screen px-4 py-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-50 mb-4">Top Headlines</h1>

        {/* Categories */}
        <Category selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />

        {/* News Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filterCategory.map((item, index) => (
            <NewsCard key={index} news={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
