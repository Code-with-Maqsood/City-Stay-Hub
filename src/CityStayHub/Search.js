import React from "react";

function Search({
  cities,
  hostelFor,
  selectedCity,
  setSelectedCity,
  selectedHostelFor,
  setSelectedHostelFor,
  searchText,
  setSearchText,
  handleCityChange,
  handleHostelFor,
  handleSearchTextChange,
  handleSearch,
}) {
  return (
    <div className="bg-[#1A8E88] py-8 rounded-md my-12 flex flex-col items-center justify-center">
      <h2 className="text-white text-3xl md:text-4xl font-bold mb-6 text-center">
        Find Your Ideal Hostel
      </h2>
      <div className="w-full max-w-4xl px-4 md:px-0 flex flex-col md:flex-row items-center gap-4">
        <input
          type="text"
          placeholder="Hostel Name"
          value={searchText}
          onChange={handleSearchTextChange}
          className="p-3 w-full md:w-2/5 border border-gray-300 rounded-md outline-none placeholder-gray-500"
        />
        <select
          id="city"
          value={selectedCity}
          onChange={handleCityChange}
          className="p-3 w-full md:w-1/4 border border-gray-300 rounded-md outline-none text-gray-700"
        >
          <option value="" disabled>
            Select City
          </option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        <select
          id="hostelFor"
          value={selectedHostelFor}
          onChange={handleHostelFor}
          className="p-3 w-full md:w-1/4 border border-gray-300 rounded-md outline-none text-gray-700"
        >
          <option value="" disabled>
            Hostel For
          </option>
          {hostelFor.map((hosFor) => (
            <option key={hosFor} value={hosFor}>
              {hosFor}
            </option>
          ))}
        </select>
      </div>
      {selectedCity && selectedHostelFor && (
        <div className="mt-4 text-lg text-white">
          You selected: <strong>{selectedCity}</strong> and you selected:
          <strong> {selectedHostelFor}</strong>
        </div>
      )}
    </div>
  );
}

export default Search;
