import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './pages/Footer'
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col min-h-screen bg-[#1c1917] text-white">
      <Router>
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* add more routes later here */}
          </Routes>
        </main>

        <Footer />
      </Router>
    </div>
  )
}

export default App
