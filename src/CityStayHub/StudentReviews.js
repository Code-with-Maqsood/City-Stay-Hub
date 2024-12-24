import React from "react";

const StudentReviews = () => {
  const reviews = [
    {
      name: "Ali",
      date: "August 29, 2024",
      rating: 4.5,
      comment: "The hostel was really clean and the food was great!",
    },
    {
      name: "Amir",
      date: "August 30, 2024",
      rating: 4.0,
      comment: "Had a wonderful experience, but the wifi could be faster.",
    },
    {
      name: "Zainab",
      date: "August 29, 2024",
      rating: 4.5,
      comment: "The hostel was really clean and the food was great!",
    },
    {
      name: "Zoha",
      date: "August 30, 2024",
      rating: 4.0,
      comment: "Had a wonderful experience, but the wifi could be faster.",
    },
  ];

  return (
    <div className="container mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-6 text-[#1A8E88]">
        Student Reviews
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold text-[#1A8E88]">
                {review.name}
              </h3>
              <p className="text-sm text-gray-600">{review.date}</p>
            </div>
            <div className="flex items-center mb-2">
              <span className="text-yellow-500 mr-2">
                {"★".repeat(Math.floor(review.rating))}{" "}
              </span>
              <span className="text-gray-600">{review.rating}/5</span>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentReviews;
