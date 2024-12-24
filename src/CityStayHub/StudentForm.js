import React from "react";
import Footer from "./Footer";
import hostelImage from "./Images/Room/roomImage2.png";

function StudentForm({ customStyle, seater }) {
  return (
    <div className="container  mx-auto px-4">
      <div className="border flex flex-col md:flex-row justify-center items-center gap-5 p-4 my-3 rounded-md border-[#1A8E88]">
        <img
          className="h-[120px] w-[120px] rounded-lg"
          src={hostelImage}
          alt=""
        />
        <div className="details w-full md:w-2/3 p-4">
          <h2 className="text-2xl font-bold">{seater} Seater Room</h2>
          <p className="text-lg">
            <strong>Available Seats:</strong> 8
          </p>
          <div className="text-sm flex flex-wrap gap-2 mt-2">
            <span>May not have a window</span>
            <span>Floor: 1</span>
            <span>9m²</span>
            <span>Free Wi-Fi</span>
            <span>Non-smoking</span>
            <span>Shared bathroom</span>
          </div>
        </div>
        <div className="rent text-center md:text-left">
          <h5 className="text-2xl font-semibold text-[#1A8E88]">
            Rent: 29000pkr
          </h5>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        <div
          className={`p-6 rounded-md border border-[#1A8E88] ${
            customStyle ? "col-span-2" : "col-span-2 lg:col-span-2"
          }`}
        >
          <h5 className="text-3xl font-bold text-[#1A8E88] mb-4">Book Now</h5>
          <div className="flex flex-col items-center">
            {[
              "Full Name",
              "Father's Name",
              "CNIC NO",
              "Father's CNIC NO",
              "Permanent Address",
              "University Name",
              "Semester",
              "Room Number",
              "Phone Number",
              "Email Account",
            ].map((placeholder, index) => (
              <input
                key={index}
                className="w-full md:w-[80%] mb-4 p-2 border border-[#1A8E88] rounded-md"
                type="text"
                placeholder={placeholder}
              />
            ))}
            <div className="w-full md:w-[80%] mb-4 p-2 border border-[#1A8E88] rounded-md flex justify-between items-center">
              <span>Upload your picture</span>
              <input type="file" />
            </div>
            <div className="w-full md:w-[80%] text-sm mb-8 p-2 border border-[#1A8E88] rounded-md">
              <p>
                EasyPaisa Number: <strong>03123123123</strong>
              </p>
              <p>
                JazzCash Number: <strong>03123123123</strong>
              </p>
              <p>
                Bank Account Number: <strong>03123123123</strong>
              </p>
              <p>
                NayaPay Account Number: <strong>03123123123</strong>
              </p>
            </div>
            <div className="w-full md:w-[80%] mb-4 p-2 border border-[#1A8E88] rounded-md flex justify-between items-center">
              <span>Upload your Challan</span>
              <input type="file" />
            </div>
            <button className="w-full md:w-[80%] bg-[#1A8E88] text-white py-3 rounded-md">
              Finished
            </button>
          </div>
        </div>
        <div
          id="priceDetail"
          className="p-6 flex ml-20 md:mx-auto flex-col items-center justify-center mx-auto rounded-md border border-[#1A8E88]"
        >
          <h5 className="text-3xl font-bold text-[#1A8E88] mb-4">
            Price Details
          </h5>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Single Seater Room x Monthly:{" "}
              <span className="font-semibold">9000</span>
            </li>
            <li>
              Security: <span className="font-semibold">6000</span>
            </li>
            <li>
              Admission: <span className="font-semibold">8000</span>
            </li>
            <li>
              Taxes & fees: <span className="font-semibold">200</span>
            </li>
            <li>
              Service Charges: <span className="font-semibold">800</span>
            </li>
          </ul>
          <h5 className="mt-5 text-3xl font-bold">Total: 20000</h5>
          <hr className="my-4" />

          <h5 className="text-3xl font-bold text-[#1A8E88] mb-2">Guides</h5>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Check-in is from 14:00 to 06:00 the next day; check-out before
              11:00.
            </li>
            <li>Provide check-in time 2 days in advance.</li>
            <li>
              Check-in and check-out times are important for your room type.
            </li>
          </ul>
          <div className="p-6 mt-20 rounded-md border border-[#1A8E88]">
            <h5 className="text-3xl font-bold text-[#1A8E88] mb-4">
              Promo Code
            </h5>
            <div className="flex">
              <input
                className="w-full p-2 border border-[#1A8E88] rounded-md mr-2"
                type="text"
                placeholder="Enter Promo Code"
              />
              <button className="bg-[#1A8E88] text-white px-4 py-2 rounded-md">
                Use
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default StudentForm;
