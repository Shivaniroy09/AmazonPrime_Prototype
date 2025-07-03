// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-4 border-t border-gray-800">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-white font-bold text-xl mr-2">prime video</span>
            <span className="text-gray-500">—</span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link to="/terms" className="text-sm hover:text-white transition-colors">
              Terms and Privacy Notice
            </Link>
            <Link to="/feedback" className="text-sm hover:text-white transition-colors">
              Send us feedback
            </Link>
            <Link to="/help" className="text-sm hover:text-white transition-colors">
              Help
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center md:text-left">
          <p className="text-xs">
            © 1996-{new Date().getFullYear()}, Amazon.com, Inc. or its affiliates
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;