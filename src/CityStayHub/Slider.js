import React, { useState } from "react";
import Slider1 from "./Images/Home/Slider.png";
import Slider2 from "./Images/Home/Slider2.png";
import Slider3 from "./Images/Home/Slider3.png";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [Slider1, Slider2, Slider3];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative overflow-hidden w-full max-w-8xl mx-auto mt-8 rounded-md">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#1A8E88] text-white p-3 rounded-full shadow-lg hover:bg-[#1A8E88] focus:outline-none"
      >
        <span className="text-2xl">&lt;</span>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#1A8E88] text-white p-3 rounded-full shadow-lg hover:bg-[#1A8E88] focus:outline-none"
      >
        <span className="text-2xl">&gt;</span>
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${
              index === currentIndex ? "bg-[#1A8E88]" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
