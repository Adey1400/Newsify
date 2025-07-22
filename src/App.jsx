import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './pages/Footer';
import NewsDetails from './pages/NewsDetails';
import SearchResult from './components/SearchResult';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [articles, setArticles] = useState([]);

  // Fetch news from your News API
  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Check if API key is properly configured
        const apiKey = import.meta.env.VITE_NEWS_API_KEY || 'YOUR_API_KEY';
        
        if (apiKey === 'YOUR_API_KEY') {
          // Use demo data when API key is not configured
          const demoArticles = [
            {
              title: "React 18 Features You Should Know",
              description: "Explore the latest features in React 18 including concurrent rendering and automatic batching.",
              content: "React 18 brings several new features that improve performance and developer experience...",
              urlToImage: "https://via.placeholder.com/400x200/61DAFB/000000?text=React",
              source: { name: "Tech News" },
              publishedAt: new Date().toISOString(),
              url: "#"
            },
            {
              title: "JavaScript ES2024 New Features",
              description: "Discover the newest JavaScript features coming in ES2024.",
              content: "The latest ECMAScript specification includes several exciting new features...",
              urlToImage: "https://via.placeholder.com/400x200/F7DF1E/000000?text=JavaScript",
              source: { name: "Dev Weekly" },
              publishedAt: new Date(Date.now() - 86400000).toISOString(),
              url: "#"
            },
            {
              title: "Web Development Trends 2024",
              description: "The top web development trends to watch this year.",
              content: "From AI integration to improved accessibility, here are the trends shaping web development...",
              urlToImage: "https://via.placeholder.com/400x200/FF6B6B/FFFFFF?text=Web+Dev",
              source: { name: "Web Today" },
              publishedAt: new Date(Date.now() - 172800000).toISOString(),
              url: "#"
            }
          ];
          setArticles(demoArticles);
          return;
        }
        
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`
        );
        const data = await res.json();
        setArticles(data.articles || []);
      } catch (err) {
        console.error("Failed to fetch news", err);
        // Fallback to demo data on error
        setArticles([
          {
            title: "Demo Article - Search Functionality Test",
            description: "This is a demo article to test the search functionality.",
            content: "You can search for keywords like 'demo', 'test', or 'search' to see this article.",
            source: { name: "Demo Source" },
            publishedAt: new Date().toISOString(),
            url: "#"
          }
        ]);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#1c1917] text-white">
      <Router>
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home articles={articles} />} />
            <Route path="/news/:id" element={<NewsDetails articles={articles} />} />
            <Route path="/search" element={<SearchResult articles={articles} />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
