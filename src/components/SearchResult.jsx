import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
const SearchResult = ({articles}) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = new URLSearchParams(location.search);
    const query = params.get('q');
    
    // Handle case when no query is provided
    if (!query) {
        return (
            <div className="min-h-screen bg-[#1a1a1a] text-white p-6">
                <h1 className="text-2xl font-bold mb-6">Please enter a search term</h1>
            </div>
        );
    }
    
    const queryLower = query.toLowerCase();
    const filteredArticles = articles?.filter(
        (article) => 
            article?.title?.toLowerCase().includes(queryLower) || 
            article?.description?.toLowerCase().includes(queryLower) ||
            article?.content?.toLowerCase().includes(queryLower)
    ) || [];
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
              onClick={() => navigate(`/news/${index}`)}
              className="bg-[#292524] p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-[#3c3630] transition cursor-pointer"
            >
              {article.urlToImage && (
                <img 
                  src={article.urlToImage} 
                  alt={article.title}
                  className="w-full h-40 object-cover rounded-lg mb-3"
                />
              )}
              <h2 className="text-lg font-semibold mb-2 hover:text-amber-400 transition">{article.title}</h2>
              <p className="text-gray-300 text-sm mt-2">
                {article.description?.slice(0, 120) || article.content?.slice(0, 120) || "No content available"}...
              </p>
              <p className="text-amber-400 text-xs mt-3">
                {article.source?.name} • {new Date(article.publishedAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-400 text-center mt-8">No results found for "{query}". Try different keywords.</p>
      )}
    </div>
  )
}

export default SearchResult