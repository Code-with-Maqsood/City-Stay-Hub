import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#373a36] rounded-md text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 px-4 mb-8">
            <h4 className="text-[#1A8E88] text-xl font-semibold mb-4 relative">
              Hostel Info
              <span className="absolute left-0 bottom-0 h-1 w-12 bg-[#1A8E88]"></span>
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/hostels" className="hover:text-[#1A8E88] transition">
                  Find Hostels
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#1A8E88] transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#1A8E88] transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-[#1A8E88] transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 px-4 mb-8">
            <h4 className="text-[#1A8E88] text-xl font-semibold mb-4 relative">
              Services
              <span className="absolute left-0 bottom-0 h-1 w-12 bg-[#1A8E88]"></span>
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/hostel-management"
                  className="hover:text-[#1A8E88] transition"
                >
                  Hostel Management
                </Link>
              </li>
              <li>
                <Link to="/booking" className="hover:text-[#1A8E88] transition">
                  Booking Services
                </Link>
              </li>
              <li>
                <Link
                  to="/special-offers"
                  className="hover:text-[#1A8E88] transition"
                >
                  Special Offers
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 px-4 mb-8">
            <h4 className="text-[#1A8E88] text-xl font-semibold mb-4 relative">
              Social
              <span className="absolute left-0 bottom-0 h-1 w-12 bg-[#1A8E88]"></span>
            </h4>
            <div className="flex space-x-4">
              <a
                href="/"
                className="h-10 w-10 rounded-full bg-[#e6e2dd] text-gray-900 flex items-center justify-center hover:bg-[#1A8E88] transition"
              >
                <i className="fab fa-facebook-f">F</i>
              </a>
              <a
                href="/"
                className="h-10 w-10 rounded-full bg-[#e6e2dd] text-gray-900 flex items-center justify-center hover:bg-[#1A8E88] transition"
              >
                <i className="fab fa-twitter">T</i>
              </a>
              <a
                href="/"
                className="h-10 w-10 rounded-full bg-[#e6e2dd] text-gray-900 flex items-center justify-center hover:bg-[#1A8E88] transition"
              >
                <i className="fab fa-instagram">I</i>
              </a>
              <a
                href="/"
                className="h-10 w-10 rounded-full bg-[#e6e2dd] text-gray-900 flex items-center justify-center hover:bg-[#1A8E88] transition"
              >
                <i className="fab fa-linkedin-in">L</i>
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/4 px-4 mb-8">
            <h4 className="text-[#1A8E88] text-xl font-semibold mb-4 relative">
              Contact
              <span className="absolute left-0 bottom-0 h-1 w-12 bg-[#1A8E88]"></span>
            </h4>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <p>123 Hostel St, City</p>
              </li>
              <li className="text-gray-400">
                <p>info@hostelwebsite.com</p>
              </li>
              <li className="text-gray-400">
                <p>(123) 456-7890</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-400 mt-8">
          &copy; {new Date().getFullYear()} Hostel Website. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
