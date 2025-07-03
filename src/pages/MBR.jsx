import React, { useState } from "react";
import MovieCard from "../components/MovieCard";

// Helper arrays for moods, times, energy levels
const moodsList = ["happy", "sad", "chill", "energetic", "relaxed", "bored"];
const timesList = ["morning", "afternoon", "evening", "night"];
const energiesList = ["low", "medium", "high"];

// Helper function to pick random elements from array (max count)
const getRandomElements = (arr, maxCount = 2) => {
  const count = Math.floor(Math.random() * maxCount) + 1;
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Generate 120 dummy movies
const moviesData = Array.from({ length: 120 }, (_, i) => {
  const id = i + 1;
  return {
    id,
    title: `Movie Title ${id}`,
    year: 2000 + (id % 24), // Year between 2000 - 2023
    type: id % 5 === 0 ? "TV Show" : "Movie",
    moods: getRandomElements(moodsList),
    times: getRandomElements(timesList),
    energy: getRandomElements(energiesList, 1),
  };
});

const MBRPage = () => {
  // State for filters
  const [selectedMood, setSelectedMood] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedEnergy, setSelectedEnergy] = useState("");

  // Filter movies based on selected filters
  const filteredMovies = moviesData.filter((movie) => {
    const moodMatch = selectedMood ? movie.moods.includes(selectedMood) : true;
    const timeMatch = selectedTime ? movie.times.includes(selectedTime) : true;
    const energyMatch = selectedEnergy ? movie.energy.includes(selectedEnergy) : true;
    return moodMatch && timeMatch && energyMatch;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-6">
      <h1 className="text-3xl font-bold mb-6 text-white">Mood-Based Recommendations</h1>

      {/* Filter controls */}
      <div className="flex flex-wrap gap-6 mb-8">
        {/* Mood */}
        <div>
          <label className="block mb-2 text-white font-semibold">Select Mood</label>
          <select
            value={selectedMood}
            onChange={(e) => setSelectedMood(e.target.value)}
            className="px-3 py-2 rounded bg-gray-800 text-white"
          >
            <option value="">Any Mood</option>
            {moodsList.map((mood) => (
              <option key={mood} value={mood}>
                {mood.charAt(0).toUpperCase() + mood.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Time of day */}
        <div>
          <label className="block mb-2 text-white font-semibold">Time of Day</label>
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="px-3 py-2 rounded bg-gray-800 text-white"
          >
            <option value="">Any Time</option>
            {timesList.map((time) => (
              <option key={time} value={time}>
                {time.charAt(0).toUpperCase() + time.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Energy level */}
        <div>
          <label className="block mb-2 text-white font-semibold">Energy Level</label>
          <select
            value={selectedEnergy}
            onChange={(e) => setSelectedEnergy(e.target.value)}
            className="px-3 py-2 rounded bg-gray-800 text-white"
          >
            <option value="">Any Energy</option>
            {energiesList.map((energy) => (
              <option key={energy} value={energy}>
                {energy.charAt(0).toUpperCase() + energy.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Filtered movies grid */}
      <div className="flex flex-wrap gap-6">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p className="text-white">No movies found for the selected filters.</p>
        )}
      </div>
    </div>
  );
};

export default MBRPage;
