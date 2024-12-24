import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-[#1A8E88] rounded-b-md text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="">
          <h1 className="text-2xl font-bold">Logo</h1>
        </Link>

        <div className="hidden md:flex items-center space-x-2">
          <input
            type="search"
            placeholder="Search"
            className="p-2 rounded-md w-64 text-black"
          />
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div
          className={`md:flex ${
            isMenuOpen ? "block" : "hidden"
          } md:space-x-6 space-y-4 md:space-y-0`}
        >
          <Link to="/" className="mx-2 hover:text-gray-200">
            Home
          </Link>

          <Link to="/contact-us" className="mx-2 hover:text-gray-200">
            Contact Us
          </Link>
          <Link to="/signIn" className="mx-2 hover:text-gray-200">
            Sign In
          </Link>
          <Link to="student-signup" className="mx-2 hover:text-gray-200">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
