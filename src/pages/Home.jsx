import React, { useState } from 'react';

import Category from '../components/Category';
import NewsFetcher from '../components/NewsFetcher';
const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");



  return (
    <div className="bg-[#1c1917] min-h-screen px-4 py-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-50 mb-4">Top Headlines</h1>

        {/* Categories */}
        <Category selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />

        {/* News Fetcher (real-time API data) */}
        <NewsFetcher selectedCategory={selectedCategory} />
      </div>
    </div>
  );
};

export default Home;
