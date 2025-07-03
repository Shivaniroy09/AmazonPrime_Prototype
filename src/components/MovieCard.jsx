// src/components/MovieCard.jsx
import React from 'react';
import { FaPlay } from 'react-icons/fa';

const MovieCard = ({ movie, isHighlighted }) => {
  // Generate consistent but random image URL for each movie using Picsum
  const imageUrl = `https://picsum.photos/seed/${movie.id}-${movie.title.split(' ').join('-')}/300/450`;

  return (
    <div className={`group relative flex-shrink-0 w-48 md:w-56 overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 hover:z-10 ${isHighlighted ? 'ring-2 ring-prime-blue' : ''}`}>
      <div className="bg-gray-800 aspect-[2/3] rounded-lg overflow-hidden relative">
        {/* Image with loading state */}
        <div className="w-full h-full flex items-center justify-center bg-gray-700">
          <img
            src={imageUrl}
            alt={movie.title}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `https://picsum.photos/seed/${movie.id}/300/450`;
            }}
          />
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="bg-prime-blue hover:bg-blue-600 rounded-full p-3 transition-colors">
            <FaPlay className="text-white text-lg" />
          </button>
        </div>
      </div>

      {/* Movie info */}
      <div className="p-2">
        <h3 className="font-semibold truncate">{movie.title}</h3>
        <div className="flex text-sm text-gray-400">
          <span>{movie.year}</span>
          <span className="mx-2">•</span>
          <span>{movie.type}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;