// src/components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[70vh] md:h-[85vh] overflow-hidden">
      {/* Background image with gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.5) 100%), url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')`
        }}
      />

      <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-end pb-16">
        <div className="max-w-2xl">
          <div className="flex items-center mb-4">
            <span className="text-prime-blue font-bold text-xl">PRIME</span>
            <span className="mx-2 text-gray-300">•</span>
            <span className="text-gray-300">2023</span>
            <span className="mx-2 text-gray-300">•</span>
            <span className="text-gray-300">16+</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">The Grand Adventure</h1>
          <p className="text-gray-200 mb-8 text-lg">
            An epic journey through uncharted lands. Join our heroes as they battle ancient forces to save their kingdom.
          </p>

          <div className="flex space-x-4">
            <button className="bg-prime-blue hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Watch Now
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-md font-medium transition-colors">
              + Watchlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;