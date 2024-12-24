import React from "react";

function Hostel({ name, address, rent, image, gender, rating }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-200 mt-12 p-4">
      <img
        className="w-full h-[200px] object-cover"
        src={image}
        alt={`${name} Hostel`}
      />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2 text-[#1A8E88]">{name}</h2>
        <p className="text-gray-700 text-base">{address}</p>
        <p className="text-gray-700 text-base">
          For {gender} <span> rating 5/{rating}</span>
        </p>
        <p className="text-gray-900 font-semibold mt-2">
          Rent: pkr{rent} per month
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-[#1A8E88] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#146f6d]">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default Hostel;
