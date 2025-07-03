// src/pages/TVShows.js
import React from 'react';
import ContentRow from '../components/ContentRow';

const TVShows = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">TV Shows</h1>
      <ContentRow title="Popular TV Shows" />
      <ContentRow title="Amazon Originals" />
      <ContentRow title="Comedy Series" />
    </div>
  );
};

export default TVShows;