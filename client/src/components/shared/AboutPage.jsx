// src/pages/About.jsx
import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-gray-50 py-12 px-6 sm:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-yellow-800 mb-6">
          About Our Food Ordering Service
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Discover a convenient and delicious way to order food online. Whether
          you're craving pizza, burgers, or sushi, our platform offers a
          seamless experience from browsing to checkout.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {/* Section 1: Introduction */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-yellow-800 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-gray-600">
              We prioritize convenience, speed, and quality. Our platform allows
              you to explore a wide variety of restaurants, track your order in
              real-time, and enjoy exclusive deals.
            </p>
          </div>

          {/* Section 2: Benefits */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-yellow-800 mb-4">
              Our Benefits
            </h2>
            <ul className="text-gray-600 list-disc pl-6">
              <li>Real-time order tracking</li>
              <li>Wide range of restaurant options</li>
              <li>Exclusive deals and discounts</li>
              <li>Fast and secure payment options</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">
            Get Started Now!
          </h2>
          <p className="text-gray-600 mb-6">
            Ready to enjoy your favorite meals? Sign up now and start ordering!
          </p>
          <a
            href="/signup"
            className="inline-block bg-yellow-800 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-700"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
