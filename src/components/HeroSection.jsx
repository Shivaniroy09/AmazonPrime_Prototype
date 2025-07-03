// src/components/HeroSection.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
    title: "Welcome to Prime Video",
    description: "Join Prime to watch the latest movies, TV shows and award-winning Amazon Originals"
  },
  {
    url: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
    title: "Exclusive Amazon Originals",
    description: "Watch shows you won't see anywhere else"
  },
  {
    url: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
    title: "Download and Watch Offline",
    description: "Save your favorites to watch without WiFi"
  }
];

const HeroSection = ({ buttonText = "Sign in to join Prime" }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.3) 100%), url(${heroImages[currentSlide].url})`,
          opacity: 1
        }}
      />

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full z-10 transition-all"
      >
        <FaChevronLeft className="text-xl" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full z-10 transition-all"
      >
        <FaChevronRight className="text-xl" />
      </button>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start px-8 md:px-16 lg:px-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{heroImages[currentSlide].title}</h1>
          <p className="text-xl md:text-2xl mb-8">{heroImages[currentSlide].description}</p>
          <Link
            to="/join"
            className="bg-prime-blue hover:bg-blue-600 text-white px-8 py-3 rounded-md font-medium transition-colors inline-block"
          >
            {buttonText}
          </Link>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-prime-blue' : 'bg-gray-400'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;