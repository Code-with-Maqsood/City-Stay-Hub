import React from "react";
import { Link } from "react-router-dom";

function StudentSignupPage({ customStyle }) {
  return (
    <div
      className={
        customStyle
          ? "container mx-auto  shadow-md rounded-md  my-10 p-6"
          : "container w-full  shadow-md sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] mx-auto rounded-md  my-10 p-6"
      }
    >
      <h5 className="text-3xl sm:text-4xl my-4 text-[#1A8E88] font-bold text-center">
        Sign Up Now
      </h5>
      <div className="flex items-center flex-col">
        <input
          className="w-full sm:w-[80%] my-4 p-2 rounded-md border border-[#1A8E88] outline-none h-12"
          type="text"
          placeholder="Email or Username"
        />
        <input
          className="w-full sm:w-[80%] mb-4 p-2 border border-[#1A8E88] outline-none rounded-md h-12"
          type="password"
          placeholder="Password"
        />
        <button className="w-full sm:w-[80%] text-white bg-[#1A8E88] h-10 rounded-md outline-none">
          Log in
        </button>
      </div>

      <h5 className="text-lg text-center text-[#1A8E88] my-4">
        Forget your username or password?
      </h5>

      <hr />

      <div className="flex flex-col items-center mt-8">
        <button className="w-full sm:w-[80%] my-2 text-[#1A8E88] text-lg border bg-white h-10 rounded-md outline-none">
          Continue with Google
        </button>
        <button className="w-full sm:w-[80%] my-2 text-[#1A8E88] text-lg border bg-white h-10 rounded-md outline-none">
          Continue with Facebook
        </button>
        <button className="w-full sm:w-[80%] my-2 text-[#1A8E88] text-lg border bg-white h-10 rounded-md outline-none">
          Continue with Twitter
        </button>
      </div>

      <Link to="/signUp">
        <button className="w-[70%] sm:w-[50%] lg:w-[30%] text-lg flex justify-center items-center mx-auto my-6 text-white bg-[#1A8E88] h-10 rounded-md outline-none">
          Sign up now
        </button>
      </Link>
    </div>
  );
}

export default StudentSignupPage;
