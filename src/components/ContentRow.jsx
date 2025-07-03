// src/components/ContentRow.jsx
import React from 'react';
import MovieCard from './MovieCard';

const ContentRow = ({ title, type, description }) => {
  // Mock movie data
  const movies = [
    { id: 1, title: "The Last Frontier", year: 2023, type: "Movie" },
    { id: 2, title: "City of Shadows", year: 2022, type: "TV Show" },
    { id: 3, title: "Ocean's Depth", year: 2023, type: "Movie" },
    { id: 4, title: "Space Odyssey", year: 2022, type: "TV Show" },
    { id: 5, title: "Mountain Quest", year: 2023, type: "Movie" },
    { id: 6, title: "Desert Mirage", year: 2021, type: "Movie" },
  ];

  return (
    <div className="mb-12">
      <div className="mb-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        {type && <p className="text-prime-blue text-sm">{type}</p>}
        {description && <p className="text-gray-400 mt-1">{description}</p>}
      </div>
      <div className="relative">
        <div className="overflow-x-auto pb-4 hide-scrollbar">
          <div className="flex space-x-4">
            {movies.map(movie => (
              <MovieCard
                key={movie.id}
                movie={movie}
                isHighlighted={title === "TRATORS" && movie.id === 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentRow;