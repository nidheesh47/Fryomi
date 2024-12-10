import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../config/axioInstance"; // Ensure correct import path
import { Rating } from "@material-tailwind/react";
const RestaurantPage = () => {
  const { restaurantId } = useParams(); // Get restaurantId from URL params
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]); // State for cart

  // Fetch the restaurant data
  const fetchRestaurant = async () => {
    try {
      const response = await axiosInstance({
        url: `/restaurant/${restaurantId}`,
      });
      console.log("Restaurant Data:", response.data); // Check the response structure
      setRestaurant(response.data.restaurant); // Assuming the restaurant data is inside 'restaurant'
    } catch (error) {
      setError("Failed to fetch restaurant details");
    } finally {
      setLoading(false);
    }
  };

  // Fetch the restaurant data when the component mounts or the restaurantId changes
  useEffect(() => {
    fetchRestaurant();
  }, [restaurantId]);

  // Handle adding items to the cart
  const addToCart = (menuItem) => {
    setCart([...cart, menuItem]); // Add item to the cart
  };

  // Loading and error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto p-4">
      {/* Restaurant details */}
      <div className="restaurant-header">
        <h1 className="text-3xl font-bold mb-4">{restaurant.name}</h1>
        <p className="text-lg">{restaurant.location}</p>
        <p className="text-lg">Phone: {restaurant.phone}</p>
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="mt-4 w-full max-w-md h-auto object-cover"
        />
      </div>

      {/* Menu section */}
      <div className="menu mt-8">
        <h2 className="text-2xl font-semibold mb-4">Menu</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurant.menu && restaurant.menu.length > 0 ? (
            restaurant.menu.map((item) => (
              <li
                key={item._id}
                className="border p-4 rounded-md shadow-md hover:shadow-xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover mb-4"
                />
                <h3 className="font-semibold text-xl">{item.title}</h3>
                <Rating value={item.rating} readonly />
                <p className="text-lg font-bold text-yellow-600">
                  ${item.price}
                </p>
                <button
                  onClick={() => addToCart(item)} // Add item to cart
                  className="mt-4 bg-yellow-800 text-white py-2 px-4 rounded-md hover:bg-yellow-700"
                >
                  Add to Cart
                </button>
              </li>
            ))
          ) : (
            <li>No menu items available</li>
          )}
        </ul>
      </div>

      {/* Cart Section */}
      <div className="cart mt-8">
        <h2 className="text-2xl font-semibold mb-4">Cart</h2>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="mb-2">
                {item.title} - ${item.price}
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantPage;
