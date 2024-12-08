import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";

const data = [
  {
    name: "RohinMess",
    image: "/pizza",
    rating: 4,
  },
  {
    name: "Moonlight",
    image: "/pizza",
    rating: 4,
  },
  {
    name: "Paalazhi",
    image: "/pizza",
    rating: 4,
  },
  {
    name: "Rainbow",
    image: "/pizza",
    rating: 4,
  },
  {
    name: "Salt&pepper",
    image: "/pizza",
    rating: 4,
  },
];

const AllRestaurantsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter data based on search query
  const filteredRestaurants = data.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-center mb-8">
        All Restaurants
      </h1>

      {/* Search Input */}
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search restaurants by name..."
          className="px-4 py-2 border border-gray-300 rounded-lg w-full max-w-md focus:outline-none focus:ring-2 focus:ring-yellow-800 focus:border-yellow-800 shadow-md"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.name}
              name={restaurant.name}
              image={restaurant.image}
              rating={restaurant.rating}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No restaurants found
          </p>
        )}
      </div>
    </div>
  );
};

export default AllRestaurantsPage;
