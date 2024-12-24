import React from "react";
import { useNavigate } from "react-router-dom";

const ConfirmationPage = () => {
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div className="w-[700px] mx-auto my-12 text-[#373a36] rounded-md p-5 border-2 border-[#1A8E88] flex flex-col items-center">
      <h2 className="text-3xl text-[#1A8E88] my-4">
        Thank you for signing up!
      </h2>
      <p className="text-lg my-2">
        Your account has been created successfully.
      </p>
      <button
        onClick={goToDashboard}
        className="border bg-[#1A8E88] text-white rounded-md px-10 py-2 my-4 text-lg"
      >
        Go to Dashboard
      </button>
    </div>
  );
};

export default ConfirmationPage;
