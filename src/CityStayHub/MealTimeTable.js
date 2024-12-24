import React, { useState, useEffect } from "react";

const initialMeals = {
  monday: { breakfast: "", lunch: "", dinner: "" },
  tuesday: { breakfast: "", lunch: "", dinner: "" },
  wednesday: { breakfast: "", lunch: "", dinner: "" },
  thursday: { breakfast: "", lunch: "", dinner: "" },
  friday: { breakfast: "", lunch: "", dinner: "" },
  saturday: { breakfast: "", lunch: "", dinner: "" },
  sunday: { breakfast: "", lunch: "", dinner: "" },
};

const MealTimetable = ({ formData, updateFormData, errors }) => {
  const [meals, setMeals] = useState(formData.meals || initialMeals);

  // Update formData when meals state changes
  useEffect(() => {
    updateFormData(meals);
  }, [meals, updateFormData]);

  const handleChange = (day, mealType, value) => {
    setMeals((prevMeals) => ({
      ...prevMeals,
      [day]: {
        ...prevMeals[day],
        [mealType]: value,
      },
    }));
  };

  return (
    <div className="max-w-full md:max-w-[800px] mx-auto my-8 bg-white border border-[#1A8E88] rounded-lg shadow-md p-6">
      <h2 className="text-2xl md:text-3xl text-center text-[#1A8E88] font-semibold mb-6">
        Weekly Meal Timetable
      </h2>
      <form className="w-full overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="text-left bg-[#e6e2dd]">
              <th className="p-3 border border-[#1A8E88]">Day</th>
              <th className="p-3 border border-[#1A8E88]">Breakfast</th>
              <th className="p-3 border border-[#1A8E88]">Lunch</th>
              <th className="p-3 border border-[#1A8E88]">Dinner</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(meals).map((day) => (
              <tr key={day} className="even:bg-[#f9f9f9]">
                <td className="p-3 border text-[#1A8E88] font-medium capitalize border-[#1A8E88]">
                  {day}
                </td>
                <td className="p-3 border border-[#1A8E88]">
                  <input
                    type="text"
                    value={meals[day].breakfast}
                    onChange={(e) =>
                      handleChange(day, "breakfast", e.target.value)
                    }
                    placeholder="Enter Breakfast"
                    className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A8E88] text-[#373a36] ${
                      errors.meals && errors.meals[day]?.breakfast
                        ? "border-red-500"
                        : "border-[#1A8E88]"
                    }`}
                  />
                  {errors.meals && errors.meals[day]?.breakfast && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.meals[day].breakfast}
                    </p>
                  )}
                </td>
                <td className="p-3 border border-[#1A8E88]">
                  <input
                    type="text"
                    value={meals[day].lunch}
                    onChange={(e) => handleChange(day, "lunch", e.target.value)}
                    placeholder="Enter Lunch"
                    className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A8E88] text-[#373a36] ${
                      errors.meals && errors.meals[day]?.lunch
                        ? "border-red-500"
                        : "border-[#1A8E88]"
                    }`}
                  />
                  {errors.meals && errors.meals[day]?.lunch && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.meals[day].lunch}
                    </p>
                  )}
                </td>
                <td className="p-3 border border-[#1A8E88]">
                  <input
                    type="text"
                    value={meals[day].dinner}
                    onChange={(e) =>
                      handleChange(day, "dinner", e.target.value)
                    }
                    placeholder="Enter Dinner"
                    className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A8E88] text-[#373a36] ${
                      errors.meals && errors.meals[day]?.dinner
                        ? "border-red-500"
                        : "border-[#1A8E88]"
                    }`}
                  />
                  {errors.meals && errors.meals[day]?.dinner && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.meals[day].dinner}
                    </p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default MealTimetable;
