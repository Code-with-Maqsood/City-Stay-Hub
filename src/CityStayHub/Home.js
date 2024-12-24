import React, { useState, useEffect } from "react";
import Slider from "./Slider";
import Hostels from "./Hostels/Hostels";
import Search from "./Search";
import Footer from "./Footer";

import hostelImage from "./Images/HostelImage/hostel-image-1.png";
import hostelImage2 from "./Images/HostelImage/hostel-image-2.png";
import hostelImage3 from "./Images/HostelImage/hostel-image-3.png";

import hostelImage4 from "./Images/HostelImage/hostel-image-4.png";
import hostelImage5 from "./Images/HostelImage/hostel-image-5.png";

function Home() {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedHostelFor, setSelectedHostelFor] = useState("");
  const [searchText, setSearchText] = useState("");
  const [filteredHostels, setFilteredHostels] = useState([]);
  const [gender, setGender] = useState("");

  const cities = [
    "Karachi",
    "Lahore",
    "Islamabad",
    "Rawalpindi",
    "Peshawar",
    "Quetta",
    "Faisalabad",
    "Multan",
    "Hyderabad",
    "Sialkot",
    "Gujranwala",
    "Sukkur",
  ];

  const hostelFor = ["Male", "Female"];

  const hostelInfo = [
    {
      name: "XYZ Hostel",
      address: "123 Main St, City",
      city: "Islamabad",
      image: hostelImage,
      secondImage: hostelImage4,
      thirdImage: hostelImage5,
      rating: "4",
      rent: "200",
      gender: "male",
      specialities: ["Free Wi-Fi", "24/7 Security", "Gym"],
      mealTimeTable: {
        monday: { breakfast: "Pancakes", lunch: "Salad", dinner: "Pizza" },
        tuesday: { breakfast: "Toast", lunch: "Soup", dinner: "Pasta" },
        wednesday: {
          breakfast: "Oatmeal",
          lunch: "Sandwich",
          dinner: "Burger",
        },
        thursday: { breakfast: "Bagel", lunch: "Pasta", dinner: "Tacos" },
        friday: { breakfast: "Cereal", lunch: "Chicken", dinner: "Fish" },
        saturday: { breakfast: "Fruit", lunch: "Rice", dinner: "Steak" },
        sunday: { breakfast: "Eggs", lunch: "Noodles", dinner: "Sushi" },
      },
    },
    {
      name: "Pearl Hostel",
      address: "123 Main St, City",
      city: "Lahore",

      image: hostelImage2,
      thirdImage: hostelImage5,
      rent: "200",
      rating: "4",
      gender: "female",
      specialities: ["Free Wi-Fi", "24/7 Security", "Gym"],
      mealTimeTable: {
        monday: { breakfast: "Pancakes", lunch: "Salad", dinner: "Pizza" },
        tuesday: { breakfast: "Toast", lunch: "Soup", dinner: "Pasta" },
        wednesday: {
          breakfast: "Oatmeal",
          lunch: "Sandwich",
          dinner: "Burger",
        },
        thursday: { breakfast: "Bagel", lunch: "Pasta", dinner: "Tacos" },
        friday: { breakfast: "Cereal", lunch: "Chicken", dinner: "Fish" },
        saturday: { breakfast: "Fruit", lunch: "Rice", dinner: "Steak" },
        sunday: { breakfast: "Eggs", lunch: "Noodles", dinner: "Sushi" },
      },
    },
    {
      name: "Rayil Hostel",
      address: "123 Main St, City",
      city: "Rawalpindi",

      image: hostelImage3,
      thirdImage: hostelImage5,
      rent: "200",
      rating: "4",
      gender: "female",
      specialities: ["Free Wi-Fi", "24/7 Security", "Gym"],
      mealTimeTable: {
        monday: { breakfast: "Pancakes", lunch: "Salad", dinner: "Pizza" },
        tuesday: { breakfast: "Toast", lunch: "Soup", dinner: "Pasta" },
        wednesday: {
          breakfast: "Oatmeal",
          lunch: "Sandwich",
          dinner: "Burger",
        },
        thursday: { breakfast: "Bagel", lunch: "Pasta", dinner: "Tacos" },
        friday: { breakfast: "Cereal", lunch: "Chicken", dinner: "Fish" },
        saturday: { breakfast: "Fruit", lunch: "Rice", dinner: "Steak" },
        sunday: { breakfast: "Eggs", lunch: "Noodles", dinner: "Sushi" },
      },
    },
  ];
  useEffect(() => {
    const filtered = hostelInfo.filter((hostel) => {
      return (
        (selectedCity === "" ||
          hostel.city.toLowerCase().includes(selectedCity.toLowerCase())) &&
        (selectedHostelFor === "" ||
          hostel.gender.toLowerCase() === selectedHostelFor.toLowerCase()) &&
        (searchText === "" ||
          hostel.name.toLowerCase().includes(searchText.toLowerCase()))
      );
    });
    setFilteredHostels(filtered);
    console.log("Filtered Hostels:", filtered);
  }, [searchText, selectedCity, selectedHostelFor]);

  const handleSearch = () => {};

  return (
    <div>
      <Slider />
      <Search
        cities={cities}
        hostelFor={hostelFor}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        selectedHostelFor={selectedHostelFor}
        setSelectedHostelFor={setSelectedHostelFor}
        searchText={searchText}
        setSearchText={setSearchText}
        handleCityChange={(e) => setSelectedCity(e.target.value)}
        handleHostelFor={(e) => setSelectedHostelFor(e.target.value)}
        handleSearchTextChange={(e) => setSearchText(e.target.value)}
        handleSearch={handleSearch}
      />
      <Hostels
        hostels={filteredHostels}
        gender={gender}
        selectedCity={selectedCity}
      />
      <Footer />
    </div>
  );
}

export default Home;
