import React from "react";

function Label({ heading, type }) {
  return (
    <div className="flex justify-evenly my-2 w-[100%] ">
      <label className="my-2 mx-4" htmlFor="username">
        {heading}
      </label>
      <input
        className="h-8 p-2   border border-[#1A8E88] text-[#1A8E88] rounded-md outline-none w-[80%]"
        type={type ? type : "text"}
        id="username"
      />
    </div>
  );
}

export default Label;
