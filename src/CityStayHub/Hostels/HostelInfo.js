import React from "react";
import { useLocation } from "react-router-dom";
import StudentSignupPage from "../StudentSignupPage";
import ReactPlayer from "react-player";
import Footer from "../Footer";
import Rooms from "./Rooms";
import { useNavigate } from "react-router-dom";
import StudentReviews from "../StudentReviews";
import hostelImage from "../Images/HostelImage/hostel-image-1.png";
import hostelImage2 from "../Images/HostelImage/hostel-image-2.png";
import hostelImage4 from "../Images/HostelImage/hostel-image-4.png";

import hostelImage5 from "../Images/HostelImage/hostel-image-5.png";
import hostelImage6 from "../Images/HostelImage/hostel-image-6.png";

import hostelImage3 from "../Images/HostelImage/hostel-image-3.png";

function HostelDetails() {
  const navigate = useNavigate();

  const goToStudentSignupPage = () => {
    navigate("/student-form");
  };

  const location = useLocation();
  const hostel = location.state?.hostel || null;

  if (!hostel) {
    return (
      <div className="container mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-[#1A8E88]">
          Hostel Not Found
        </h1>
        <p className="text-xl mb-4 text-gray-700">
          The hostel details are not available.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-8 p-6 bg-white rounded-lg">
      <div className="grid  grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="container col-span-2   bg-white rounded-lg shadow-lg p-5">
          <ReactPlayer
            width="100%"
            className="aspect-video"
            url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
          />
          <h1 className="text-4xl font-bold mb-6 text-[#1A8E88]">
            {hostel.name}
          </h1>
          <p className="text-xl mb-4 text-gray-700">{hostel.address}</p>
          <p className="text-xl mb-4 text-[#1A8E88] font-semibold">
            Rent: pkr {hostel.rent}/month
          </p>
        </div>
        <div>
          <StudentSignupPage customStyle="h-full" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <img
          className="w-full  h-64 md:h-80 object-cover rounded-lg shadow-md"
          src={hostel.image}
          alt={hostel.name}
        />
        <img
          className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
          src={hostelImage5}
          alt="Gallery 1"
        />
        <img
          className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
          src={hostelImage6}
          alt="Gallery 2"
        />
      </div>

      <Rooms goToStudentSignupPage={goToStudentSignupPage} />

      <div className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-[#1A8E88]">
          Specialities
        </h2>
        <ul className="list-disc list-inside text-gray-700 text-lg">
          {hostel.specialities.map((speciality, index) => (
            <li key={index} className="mb-2">
              {speciality}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="border  bg-white rounded-lg shadow-lg p-5">
          <h2 className="text-3xl font-semibold mb-4 text-[#1A8E88]">
            Meal Timetable
          </h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse rounded-lg shadow-md">
              <thead>
                <tr className="bg-[#1A8E88] text-white">
                  <th className="border px-6 py-3">Day</th>
                  <th className="border px-6 py-3">Breakfast</th>
                  <th className="border px-6 py-3">Lunch</th>
                  <th className="border px-6 py-3">Dinner</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(hostel.mealTimeTable).map((day) => (
                  <tr key={day} className="text-gray-700">
                    <td className="border px-6 py-3 capitalize">{day}</td>
                    <td className="border px-6 py-3">
                      {hostel.mealTimeTable[day].breakfast}
                    </td>
                    <td className="border px-6 py-3">
                      {hostel.mealTimeTable[day].lunch}
                    </td>
                    <td className="border px-6 py-3">
                      {hostel.mealTimeTable[day].dinner}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-md">
          <iframe
            title="Hostel Location"
            className="w-full h-64 md:h-full rounded-lg shadow-md"
            frameBorder="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=Hostel City, Islamabad&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>

      <StudentReviews />
      <Footer />
    </div>
  );
}

export default HostelDetails;
