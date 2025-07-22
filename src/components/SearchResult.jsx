import React from 'react'
import { useLocation } from 'react-router-dom'
const SearchResult = ({articles}) => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const query = params.get('q').toLowerCase();
   const filteredArticles = articles?.filter(
  (article) => article.title?.toLowerCase().includes(query)
);
  return (
   <div className="min-h-screen bg-[#1a1a1a] text-white p-6">
      <h1 className="text-2xl font-bold mb-6">
        Search results for: <span className="text-amber-400">"{query}"</span>
      </h1>

      {filteredArticles?.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article, index) => (
            <div
              key={index}
              className="bg-[#292524] p-4 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-lg font-semibold">{article.title}</h2>
              <p className="text-gray-300 text-sm mt-2">
                {article.content?.slice(0, 100) || "No content available"}...
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-400">No results found...</p>
      )}
    </div>
  )
}

export default SearchResult