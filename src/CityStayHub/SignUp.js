import React, { useState } from "react";
import MealTimetable from "./MealTimeTable";
import RoomDetails from "./RoomDetails";
import HostelDetails from "./HostelDetails";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    hostelName: "",
    address: "",
    city: "",
    email: "",
    contactNo: "",
    meals: {
      monday: { breakfast: "", lunch: "", dinner: "" },
      tuesday: { breakfast: "", lunch: "", dinner: "" },
      wednesday: { breakfast: "", lunch: "", dinner: "" },
      thursday: { breakfast: "", lunch: "", dinner: "" },
      friday: { breakfast: "", lunch: "", dinner: "" },
      saturday: { breakfast: "", lunch: "", dinner: "" },
      sunday: { breakfast: "", lunch: "", dinner: "" },
    },
    rooms: [],
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const nextStep = () => {
    if (validateStep(step)) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const dashboard = () => {
    if (validateStep(step)) {
      // Save hostel data to local storage
      localStorage.setItem("hostelData", JSON.stringify(formData));
      console.log("Form data submitted:", formData);
      navigate("/dashboard");
    }
  };

  const updateFormData = (field, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };

  const validateStep = (step) => {
    let tempErrors = {};
    if (step === 1) {
      if (!formData.hostelName)
        tempErrors.hostelName = "Hostel Name is required";
      if (!formData.address) tempErrors.address = "Address is required";
      if (!formData.city) tempErrors.city = "City is required";

      if (!formData.email) tempErrors.email = "Email is required";
      if (!formData.contactNo)
        tempErrors.contactNo = "Contact Number is required";
    } else if (step === 2) {
      Object.keys(formData.meals).forEach((day) => {
        if (
          !formData.meals[day].breakfast ||
          !formData.meals[day].lunch ||
          !formData.meals[day].dinner
        ) {
          tempErrors.meals = "All meal fields are required for each day";
        }
      });
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-[900px] mx-auto mt-12">
        {step === 1 && (
          <div className="p-5 mb-20 bg-white rounded-md shadow-md">
            <HostelDetails
              formData={formData}
              updateFormData={updateFormData}
              errors={errors}
            />
            <div className="flex justify-end mt-4">
              <button
                className="px-6 py-2 text-white bg-[#1A8E88] rounded-md"
                onClick={nextStep}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="p-5 bg-white rounded-md shadow-md">
            <MealTimetable
              formData={formData}
              updateFormData={(data) => updateFormData("meals", data)}
              errors={errors}
            />
            <div className="flex justify-between  mt-4">
              <button
                className="px-6 py-2 text-white bg-gray-400 rounded-md"
                onClick={prevStep}
              >
                Previous
              </button>
              <button
                className="px-6 py-2 text-white bg-[#1A8E88] rounded-md"
                onClick={nextStep}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="p-5 bg-white rounded-md shadow-md">
            <RoomDetails formData={formData} updateFormData={updateFormData} />
            <div className="flex justify-between mt-4">
              <button
                className="px-6 py-2 text-white bg-gray-400 rounded-md"
                onClick={prevStep}
              >
                Previous
              </button>
              <button className="px-6 py-2 text-white bg-[#1A8E88] rounded-md">
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SignUp;
