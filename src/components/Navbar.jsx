import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaSearch, FaUser, FaCaretDown, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-black bg-opacity-90 py-3 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left side - Logo and Nav */}
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-white font-bold text-2xl">prime video</Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            {["/", "/movies", "/tv-shows", "/live-tv", "/mbr"].map((path, i) => {
              const names = ["Home", "Movies", "TV Shows", "Live TV", "MBR"];
              return (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? path === "/mbr"
                        ? "text-yellow-400 font-bold border-b-2 border-yellow-400"
                        : "text-white font-semibold"
                      : path === "/mbr"
                      ? "text-yellow-300 hover:text-yellow-400 font-semibold"
                      : "text-gray-400 hover:text-white"
                  }
                >
                  {names[i]}
                </NavLink>
              );
            })}
          </div>
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="text-gray-300 hover:text-white" aria-label="Search">
            <FaSearch className="text-xl" />
          </button>

          <button className="flex items-center space-x-1 border border-gray-400 hover:border-white px-3 py-1 rounded text-sm text-white">
            <span>EN</span>
            <FaCaretDown className="text-xs" />
          </button>

          <Link
            to="/join-prime"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm font-medium transition"
          >
            Join Prime
          </Link>

          <button className="text-gray-300 hover:text-white" aria-label="User Profile">
            <FaUser className="text-xl" />
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 px-2 space-y-3">
          {[
            { path: "/", label: "Home" },
            { path: "/movies", label: "Movies" },
            { path: "/tv-shows", label: "TV Shows" },
            { path: "/live-tv", label: "Live TV" },
            { path: "/mbr", label: "MBR" },
          ].map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `block px-3 py-2 rounded ${
                  isActive
                    ? path === "/mbr"
                      ? "bg-yellow-500 text-black font-bold"
                      : "bg-white text-black font-semibold"
                    : path === "/mbr"
                    ? "text-yellow-300 hover:text-yellow-400 font-semibold"
                    : "text-gray-300 hover:text-white"
                }`
              }
              onClick={closeMenu}
            >
              {label}
            </NavLink>
          ))}

          <div className="flex flex-col gap-3 pt-4 border-t border-gray-700">
            <button className="text-gray-300 hover:text-white flex items-center gap-2">
              <FaSearch /> Search
            </button>
            <button className="text-gray-300 hover:text-white flex items-center gap-2">
              <FaUser /> Profile
            </button>
            <button className="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm">
              Join Prime
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
