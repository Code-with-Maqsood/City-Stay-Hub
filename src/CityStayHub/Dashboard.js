import React, { useState } from "react";
import ki from "./ki.jpg";
import Footer from "./Footer";

function Dashboard() {
  const [isEditing, setIsEditing] = useState(false);

  const hostelDetails = {
    name: "XYZ Hostel",
    address: "123 Main St, City",
    image: ki,
    rent: "200",
    specialities: ["Free Wi-Fi", "24/7 Security", "Gym"],
    mealTimeTable: {
      monday: { breakfast: "Pancakes", lunch: "Salad", dinner: "Pizza" },
      tuesday: { breakfast: "Toast", lunch: "Soup", dinner: "Pasta" },
      wednesday: { breakfast: "Oatmeal", lunch: "Sandwich", dinner: "Burger" },
      thursday: { breakfast: "Bagel", lunch: "Pasta", dinner: "Tacos" },
      friday: { breakfast: "Cereal", lunch: "Chicken", dinner: "Fish" },
      saturday: { breakfast: "Fruit", lunch: "Rice", dinner: "Steak" },
      sunday: { breakfast: "Eggs", lunch: "Noodles", dinner: "Sushi" },
    },
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="">
      <div className="container mx-auto my-8 p-6 bg-white rounded-lg shadow-md max-w-5xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold text-[#1A8E88]">
            {hostelDetails.name}
          </h1>
          <button
            onClick={handleEditClick}
            className="bg-[#1A8E88] text-white text-lg px-6 py-2 rounded-xl hover:bg-[#155F64] transition duration-300"
          >
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>
        <p className="text-xl mb-4 text-gray-700">{hostelDetails.address}</p>
        <p className="text-xl mb-4 text-[#1A8E88] font-semibold">
          Rent: pkr {hostelDetails.rent}/month
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <img
            className="w-full h-auto object-cover rounded-lg shadow-md"
            src={hostelDetails.image}
            alt={hostelDetails.name}
          />
          <img
            className="w-full h-auto object-cover rounded-lg shadow-md"
            src="https://via.placeholder.com/300x200"
            alt="Gallery 1"
          />
          <img
            className="w-full h-auto object-cover rounded-lg shadow-md"
            src="https://via.placeholder.com/300x200"
            alt="Gallery 2"
          />
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-[#1A8E88]">
            Specialities
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-lg">
            {hostelDetails.specialities.map((speciality, index) => (
              <li key={index} className="mb-2">
                {speciality}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-4 text-[#1A8E88]">
            Meal Timetable
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse shadow-md">
              <thead>
                <tr className="bg-[#1A8E88] text-white">
                  <th className="border px-6 py-3">Day</th>
                  <th className="border px-6 py-3">Breakfast</th>
                  <th className="border px-6 py-3">Lunch</th>
                  <th className="border px-6 py-3">Dinner</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(hostelDetails.mealTimeTable).map((day) => (
                  <tr key={day} className="text-gray-700">
                    <td className="border px-6 py-3 capitalize">{day}</td>
                    <td className="border px-6 py-3">
                      {isEditing ? (
                        <input
                          type="text"
                          value={hostelDetails.mealTimeTable[day].breakfast}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      ) : (
                        hostelDetails.mealTimeTable[day].breakfast
                      )}
                    </td>
                    <td className="border px-6 py-3">
                      {isEditing ? (
                        <input
                          type="text"
                          value={hostelDetails.mealTimeTable[day].lunch}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      ) : (
                        hostelDetails.mealTimeTable[day].lunch
                      )}
                    </td>
                    <td className="border px-6 py-3">
                      {isEditing ? (
                        <input
                          type="text"
                          value={hostelDetails.mealTimeTable[day].dinner}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      ) : (
                        hostelDetails.mealTimeTable[day].dinner
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
