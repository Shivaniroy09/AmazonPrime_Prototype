// src/pages/Movies.js
import React from 'react';
import ContentRow from '../components/ContentRow';

const Movies = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Movies</h1>
      <ContentRow title="Popular Movies" />
      <ContentRow title="New Releases" />
      <ContentRow title="Action & Adventure" />
    </div>
  );
};

export default Movies;