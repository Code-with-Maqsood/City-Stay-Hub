import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialRoomDetails = {
  twoSeater: 0,
  threeSeater: 0,
  fourSeater: 0,
  fiveSeater: 0,
};

const RoomDetails = () => {
  const navigate = useNavigate();

  const [roomDetails, setRoomDetails] = useState(initialRoomDetails);
  const [errors, setErrors] = useState({});

  const handleChange = (roomType, value) => {
    const numValue = Math.max(0, Number(value));
    setRoomDetails((prevDetails) => ({
      ...prevDetails,
      [roomType]: numValue,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(roomDetails).forEach((roomType) => {
      if (roomDetails[roomType] <= 0) {
        newErrors[roomType] = "Please enter a valid number of rooms";
      }
    });
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      navigate("/confirmation");
    }
  };

  return (
    <div className="flex flex-col items-center text-lg">
      <h2 className="text-2xl md:text-3xl text-center text-[#1A8E88] font-semibold mb-6">
        Room Details
      </h2>
      <form onSubmit={handleSubmit}>
        <table className="border-collapse w-full outline-none">
          <thead className="border-b bg-gray-200">
            <tr>
              <th className="p-2 text-left">Room Type</th>
              <th className="p-2 text-left">Number of Rooms</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(initialRoomDetails).map((roomType) => (
              <tr className="border-b" key={roomType}>
                <td className="p-2">
                  {roomType.charAt(0).toUpperCase() +
                    roomType.slice(1).replace(/([A-Z])/g, " $1")}
                </td>
                <td>
                  <input
                    className={`w-full text-[#373a36] outline-none rounded-sm p-2 ${
                      errors[roomType] ? "border-red-500" : ""
                    }`}
                    type="number"
                    min="0"
                    value={roomDetails[roomType]}
                    onChange={(e) => handleChange(roomType, e.target.value)}
                    placeholder={`Enter number of ${roomType.replace(
                      /([A-Z])/g,
                      " $1"
                    )}`}
                  />
                  {errors[roomType] && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors[roomType]}
                    </p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          className="border px-10 py-2 my-4 text-lg bg-[#1A8E88] text-white rounded-sm"
          type="submit"
        >
          Save Room Details
        </button>
      </form>
    </div>
  );
};

export default RoomDetails;
