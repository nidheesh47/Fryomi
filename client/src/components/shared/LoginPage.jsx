import React, { useState } from "react";
import { axiosInstance } from "../../config/axioInstance";
import { useNavigate } from "react-router-dom"; // Import useNavigate to redirect after login

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook to navigate to another page

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from reloading the page

    try {
      // Send the email and password to the backend for login
      const response = await axiosInstance.post("/user/login", {
        email,
        password,
      });

      // Log the response to check if the token is returned
      console.log("Login response:", response);

      // Check if the response contains a token
      if (response.data && response.data.token) {
        // Store the token in localStorage (or sessionStorage, depending on your requirements)
        localStorage.setItem("token", response.data.token);

        // Optionally, redirect to the home page or another protected route
        navigate("/"); // This redirects to the homepage or another page
      } else {
        console.error("Login failed: No token found in response");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center text-yellow-800 mb-6">
          Login to Your Account
        </h2>
        <form onSubmit={handleSubmit}>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-yellow-800 text-white font-semibold rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/signup" className="text-yellow-800 hover:text-yellow-600">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
