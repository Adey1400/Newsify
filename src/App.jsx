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
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?country=in&apiKey=YOUR_API_KEY`
        );
        const data = await res.json();
        setArticles(data.articles || []);
      } catch (err) {
        console.error("Failed to fetch news", err);
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
