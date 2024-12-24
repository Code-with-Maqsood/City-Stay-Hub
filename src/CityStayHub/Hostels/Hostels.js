import React from "react";
import Hostel from "./Hostel";
import { Link } from "react-router-dom";

function Hostels({ hostels, gender, selectedCity }) {
  console.log("Hostels Prop:", hostels); // Debugging

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {hostels.length === 0 ? (
        <p>No hostels found</p>
      ) : (
        hostels
          .filter((hostel) => gender === "" || hostel.gender === gender)
          .map((hostel, index) => (
            <Link
              key={index}
              to={`/hostelInfo`}
              state={{ hostel }}
              className="cursor-pointer"
            >
              <Hostel
                name={hostel.name}
                address={hostel.address}
                image={hostel.image}
                rent={hostel.rent}
                gender={hostel.gender}
                rating={hostel.rating}
              />
            </Link>
          ))
      )}
    </div>
  );
}

export default Hostels;
