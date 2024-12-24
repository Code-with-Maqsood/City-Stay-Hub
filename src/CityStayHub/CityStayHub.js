import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Slider from "./Slider";
import Search from "./Search";
import Footer from "./Footer";
import SearchPage from "./SearchPage";
import HostelInfo from "./Hostels/HostelInfo";

import SignInPage from "./SignInPage";
import SignUp from "./SignUp";
import ConfirmationPage from "./ConfirmationPage";
import Dashboard from "./Dashboard";
import HostelDetails from "./HostelDetails";
import StudentSignupPage from "./StudentSignupPage";
import ContactUs from "./ContactUs";
import StudentForm from "./StudentForm";

function CityStayHub() {
  return (
    <Router>
      <div className="px-12">
        <h1 className="bold text-2xl my-0 h-20 flex justify-center align-middle items-center text-center font-mono bg-[#373a36] text-white">
          -City Stay Hub-
        </h1>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about" element={<Slider />} />
          <Route path="/searchPage" element={<SearchPage />} />
          <Route path="/signIn" element={<SignInPage />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/confirmationPage" element={<ConfirmationPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/hostel-details" element={<HostelDetails />} />
          <Route path="/hostelInfo" element={<HostelInfo />} />
          <Route path="/student-signup" element={<StudentSignupPage />} />
          <Route path="/student-form" element={<StudentForm />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/contact" element={<Footer />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default CityStayHub;
