import React from "react";
import Room from "./Room";
import hostelProfileImage from "../Images/roomProfile/roomProfile.png";
import hostelProfileImage5 from "../Images/roomProfile/roomProfile5.png";
import hostelProfileImage6 from "../Images/roomProfile/roomProfile6.png";
import hostelProfileImage2 from "../Images/roomProfile/roomProfile2.png";
import hostelProfileImage3 from "../Images/roomProfile/roomProfile3.png";
import hostelProfileImage4 from "../Images/roomProfile/roomProfile4.png";
function Rooms({ goToStudentSignupPage }) {
  const profileImages = [
    hostelProfileImage,
    hostelProfileImage2,
    hostelProfileImage3,
    hostelProfileImage4,
    hostelProfileImage5,
    hostelProfileImage6,
  ];
  const rooms = ["one ", "two", "three"];
  return (
    <div>
      {rooms.map((room, key) => (
        <Room
          goToStudentSignupPage={goToStudentSignupPage}
          key={key}
          seater={room}
          img={profileImages[key]}
        />
      ))}
    </div>
  );
}

export default Rooms;
