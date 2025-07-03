import React from 'react';
import HeroSection from '../components/HeroSection';
import ContentRow from '../components/ContentRow';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-gray-900">
      <HeroSection buttonText="Join Prime" />

      <div className="container mx-auto px-4 py-8">
        <ContentRow
          title="TRATORS"
          type="Amazon Original"
          description="A gripping spy thriller about betrayal and redemption"
        />
        <ContentRow
          title="STOLEN"
          type="Action Movie"
          description="High-octane heist drama with unexpected twists"
        />
        <ContentRow
          title="PANCHA VAT"
          type="Regional Special"
          description="Award-winning regional drama now streaming"
        />

        {/* Prime Membership Benefits */}
        <div className="my-12 p-8 bg-gray-800 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Your Prime membership includes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Watch all you want. Award-winning Amazon Originals",
              "Thousands of movies and TV shows",
              "Watch on any device. Cancel anytime"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-prime-blue p-1 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* More Content Rows */}
        <ContentRow title="Recommended for you" />
        <ContentRow title="Popular movies" />
        <ContentRow title="Amazon Originals" />
        <ContentRow title="TV shows you might like" />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;