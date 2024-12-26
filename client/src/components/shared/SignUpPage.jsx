import React, { useState } from "react";
import { signup } from "../../services/authService";
const SignUpPage = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    signup(
      userDetails.name,
      userDetails.email,
      userDetails.mobile,
      userDetails.password
    );
    console.log("User signed up with", userDetails);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96 md:w-80 lg:w-96">
        <h2 className="text-2xl font-semibold text-center text-yellow-900 mb-6">
          Create a New Account
        </h2>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-900 focus:border-yellow-900"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-900 focus:border-yellow-900"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="mobile"
            className="block text-sm font-medium text-gray-700"
          >
            Mobile Number
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-900 focus:border-yellow-900"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-900 focus:border-yellow-900"
          />
        </div>

        <button
          onClick={handleSignup}
          className="w-full py-2 bg-yellow-900 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-900"
        >
          Sign Up
        </button>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-yellow-900">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
