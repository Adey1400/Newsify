import React from 'react'
import { useParams , useLocation} from 'react-router-dom'
const NewsDetails = () => {
    const {id}= useParams();
    const location = useLocation();
    const news = location.state?.news;
    if (!news) {
    return <p className="text-white p-4">No article data found.</p>;
  }
  return (
 <div className="bg-[#1c1917] min-h-screen text-white px-4 py-6 sm:px-6 max-w-3xl mx-auto">
  {/* Title */}
  <h1 className="text-2xl sm:text-3xl font-bold mb-4 leading-snug">{news.title}</h1>

  {/* Image (if exists) */}
  {news.image_url && (
    <img
      src={news.image_url}
      alt="news"
      className="w-full h-60 sm:h-72 object-cover rounded-lg mb-4"
    />
  )}

  {/* Meta Info */}
  <p className="text-gray-300 mb-2">
    <strong>Source:</strong> {news.source_id}
  </p>
  <p className="text-gray-300 mb-4">
    <strong>Published on:</strong> {news.pubDate}
  </p>

  {/* Content */}
  <p className="text-gray-200 leading-relaxed whitespace-pre-line">
    {news.content || "No content available."}
  </p>

  {/* External Link */}
  <a
    href={news.link}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-6 inline-block text-amber-400 hover:text-amber-300 transition-colors duration-300 font-medium"
  >
    Read full article →
  </a>
</div>

  )
}

export default NewsDetails