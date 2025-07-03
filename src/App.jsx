// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Movies from './pages/Movies';
import TVShows from './pages/TVShows';
import LiveTV from './pages/LiveTV';
import Subscriptions from './pages/Subscriptions';
import MBR from './pages/MBR'; // ✅ Import MBR page

function App() {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen text-white">
  <Navbar />
  <div className="px-4 sm:px-6 lg:px-8 py-4">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/tv-shows" element={<TVShows />} />
      <Route path="/live-tv" element={<LiveTV />} />
      <Route path="/subscriptions" element={<Subscriptions />} />
      <Route path="/mbr" element={<MBR />} />
    </Routes>
  </div>
</div>

    </Router>
  );
}

export default App;
