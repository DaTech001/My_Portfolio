import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white shadow-lg sticky top-0 z-50">
      {/* Container for Desktop */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-2xl font-bold tracking-tight">
              DaTech
            </NavLink>
          </div>

          {/* Spacer to push NavLinks toward center */}
          <div className="flex-grow"></div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-base font-medium transition-colors duration-200 ${
                  isActive ? "text-blue-400" : "hover:text-blue-400"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-base font-medium transition-colors duration-200 ${
                  isActive ? "text-blue-400" : "hover:text-blue-400"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `text-base font-medium transition-colors duration-200 ${
                  isActive ? "text-blue-400" : "hover:text-blue-400"
                }`
              }
            >
              Portfolio
            </NavLink>
          
          </div>

          {/* CTA Button for Desktop */}
          <div className="hidden md:flex flex-grow justify-end">
            <NavLink
              to="/contact"
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors duration-200 text-base font-medium"
            >
              Get in Touch
            </NavLink>
          </div>

          {/* Hamburger Button for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md p-2"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Slide Animation */}
      <div
        className={`md:hidden bg-gray-800 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink
            to="/"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                isActive ? "text-blue-400" : "hover:text-blue-400"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                isActive ? "text-blue-400" : "hover:text-blue-400"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                isActive ? "text-blue-400" : "hover:text-blue-400"
              }`
            }
          >
            Portfolio
          </NavLink>
          {/* CTA Button for Mobile */}
          <NavLink
            to="/contact"
            onClick={toggleMenu}
            className="block px-3 py-2 text-base font-medium bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors duration-200"
          >
            Get in Touch
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;