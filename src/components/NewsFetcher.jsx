import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';

const NewsFetcher = ({ selectedCategory }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

  const fetchNews = async () => {
    try {
      setLoading(true);
      let categoryParam = selectedCategory !== "All" ? `&category=${selectedCategory.toLowerCase()}` : "";
      const response = await fetch(
        `https://newsdata.io/api/1/news?apikey=${API_KEY}&country=in&language=en${categoryParam}`
      );
      const data = await response.json();
      setArticles(data.results || []);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [selectedCategory]);

  return (
   <div className="mt-6 px-4 sm:px-6">
  {loading ? (
    <div className="text-center py-10 text-white text-lg animate-pulse">
      Fetching fresh headlines...
    </div>
  ) : (
    <>
      {articles.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <NewsCard key={index} news={article} />
          ))}
        </div>
      ) : (
        <p className="text-white text-center mt-10 text-lg">
          No articles found for this category.
        </p>
      )}
    </>
  )}
</div>

  );
};

export default NewsFetcher;
