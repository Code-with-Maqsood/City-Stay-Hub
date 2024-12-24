import React from "react";

function Room({ seater, goToStudentSignupPage, img }) {
  return (
    <div className=" bg-white rounded-lg shadow-lg px-4 p-2 my-3  flex flex-col md:flex-row items-center gap-5 h-auto md:h-[150px] mb-8">
      <img
        className="h-[120px] w-[120px] rounded-lg object-cover"
        src={img}
        alt=""
      />
      <div className="details flex-1 p-5">
        <h2 className="text-2xl font-bold mb-2">
          <span className="capitalize">{seater}</span> Seater Rooms
        </h2>
        <p className="text-lg mb-1">
          <strong>Available Seats: </strong> 8
        </p>
        <p className="text-lg mb-1">
          <strong>Price: </strong> 16000pkr.
        </p>
        <div className="text-sm text-gray-600 flex flex-wrap gap-2">
          <span>
            <i>i</i> May not have a window
          </span>
          <span>
            <i>i</i> Floor: 1
          </span>
          <span>
            <i>i</i> 9m²
          </span>
          <span>
            <i>i</i> Free Wi-Fi
          </span>
          <span>
            <i>i</i> Non-smoking
          </span>
          <span>
            <i>i</i> Shared bathroom
          </span>
        </div>
      </div>

      <button
        onClick={goToStudentSignupPage}
        className="md:w-[25%] w-full text-xl md:text-2xl text-white bg-[#1A8E88] py-2 md:py-0 md:h-full rounded-md"
      >
        Book Now
      </button>
    </div>
  );
}

export default Room;
