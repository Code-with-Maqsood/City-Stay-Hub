import React from "react";
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] py-12">
      <div className="container mx-auto my-20 px-4">
        <h1 className="text-4xl font-bold text-center text-[#1A8E88] mb-12">
          Let's Have a Talk
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-[#1A8E88] mb-6">
              Get in Touch
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A8E88]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A8E88]"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A8E88]"
                  rows="5"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#1A8E88] text-white py-3 rounded-md hover:bg-[#166f6b] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-[#1A8E88] mb-6">
              Contact Information
            </h2>
            <p className="text-gray-700 mb-6">
              We’re here to help! Contact us directly, and we will respond as
              soon as possible.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#1A8E88] text-white p-3 rounded-full">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Our Office
                  </h4>
                  <p className="text-gray-600">123 Hostel St, Hostel City</p>
                  <p className="text-gray-600">Country, ZIP Code</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#1A8E88] text-white p-3 rounded-full">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Call Us
                  </h4>
                  <p className="text-gray-600">+123 456 7890</p>
                  <p className="text-gray-600">Mon - Fri, 8am - 5pm</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#1A8E88] text-white p-3 rounded-full">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Email Us
                  </h4>
                  <p className="text-gray-600">info@hostelwebsite.com</p>
                  <p className="text-gray-600">24/7 Online Support</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#1A8E88] text-white p-3 rounded-full">
                  <i className="fas fa-globe"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Visit Us Online
                  </h4>
                  <p className="text-gray-600">www.hostelwebsite.com</p>
                  <p className="text-gray-600">Explore our services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
