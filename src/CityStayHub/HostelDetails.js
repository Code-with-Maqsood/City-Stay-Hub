import React from "react";

function HostelDetails({ formData, updateFormData, errors }) {
  const handleFileChange = (event) => {
    const { name, files } = event.target;
    updateFormData(name, files[0]);
  };

  return (
    <div className="w-full max-w-[700px] mx-auto my-8 bg-white text-[#373a36] rounded-lg p-8 shadow-md border border-[#e6e2dd]">
      <h2 className="text-3xl font-semibold text-center text-[#1A8E88] mb-6">
        Hostel Details
      </h2>
      <form className="space-y-6">
        <div>
          <label className="block text-lg font-medium text-[#1A8E88] mb-2">
            Hostel Name
          </label>
          <input
            type="text"
            name="hostelName"
            value={formData.hostelName}
            onChange={(e) => updateFormData("hostelName", e.target.value)}
            className={`w-full p-3 border rounded-md focus:outline-none ${
              errors.hostelName ? "border-red-500" : "border-[#1A8E88]"
            }`}
            placeholder="Enter hostel name"
          />
          {errors.hostelName && (
            <p className="text-red-500 text-sm mt-1">{errors.hostelName}</p>
          )}
        </div>

        <div>
          <label className="block text-lg font-medium text-[#1A8E88] mb-2">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={(e) => updateFormData("address", e.target.value)}
            className={`w-full p-3 border rounded-md focus:outline-none ${
              errors.address ? "border-red-500" : "border-[#1A8E88]"
            }`}
            placeholder="Enter your address"
          />
          {errors.address && (
            <p className="text-red-500 text-sm mt-1">{errors.address}</p>
          )}
        </div>

        <div>
          <label className="block text-lg font-medium text-[#1A8E88] mb-2">
            City
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={(e) => updateFormData("city", e.target.value)}
            className={`w-full p-3 border rounded-md focus:outline-none ${
              errors.city ? "border-red-500" : "border-[#1A8E88]"
            }`}
            placeholder="Enter your city"
          />
          {errors.city && (
            <p className="text-red-500 text-sm mt-1">{errors.city}</p>
          )}
        </div>

        <div>
          <label className="block text-lg font-medium text-[#1A8E88] mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => updateFormData("email", e.target.value)}
            className={`w-full p-3 border rounded-md focus:outline-none ${
              errors.email ? "border-red-500" : "border-[#1A8E88]"
            }`}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-lg font-medium text-[#1A8E88] mb-2">
            Contact No
          </label>
          <input
            type="text"
            name="contactNo"
            value={formData.contactNo}
            onChange={(e) => updateFormData("contactNo", e.target.value)}
            className={`w-full p-3 border rounded-md focus:outline-none ${
              errors.contactNo ? "border-red-500" : "border-[#1A8E88]"
            }`}
            placeholder="Enter your contact number"
          />
          {errors.contactNo && (
            <p className="text-red-500 text-sm mt-1">{errors.contactNo}</p>
          )}
        </div>

        <div>
          <label className="block text-lg font-medium text-[#1A8E88] mb-2">
            Upload Photo
          </label>
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full p-3 border border-[#1A8E88] rounded-md focus:outline-none"
          />
          {formData.photo && (
            <p className="mt-2 text-gray-600">
              Selected file: {formData.photo.name}
            </p>
          )}
        </div>

        <div>
          <label className="block text-lg font-medium text-[#1A8E88] mb-2">
            Upload Video
          </label>
          <input
            type="file"
            name="video"
            accept="video/*"
            onChange={handleFileChange}
            className="w-full p-3 border border-[#1A8E88] rounded-md focus:outline-none"
          />
          {formData.video && (
            <p className="mt-2 text-gray-600">
              Selected file: {formData.video.name}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default HostelDetails;
