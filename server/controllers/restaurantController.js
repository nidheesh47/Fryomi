const Restaurant = require("../models/restaurant");
const User = require("../models/user");
const { param } = require("../routes/userRoutes");

const createRestaurant = async (req, res, next) => {
  try {
    const { name, location, phone, cuisine } = req.body;
    const userId = req.user.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(401).json({ message: "Unauthorized user" });
    }

    const newRestaurant = new Restaurant({
      name,
      location,
      phone,
      cuisine,
      user: userId,
    });

    const savedRestaurant = await newRestaurant.save();
    res.status(201).json({
      message: "Restaurant created successfully",
      restaurant: savedRestaurant,
    });
  } catch (error) {
    res.status(500).json({ message: error.message || "Internal server error" });
  }
};

const updateRestaurant = async (req, res, next) => {
  try {
    const { restaurantId } = req.params;
    const { name, location, phone, cuisine, menu } = req.body;
    const userId = req.user.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(401).json({ message: "Unauthorized user" });
    }
    const update = await Restaurant.findByIdAndUpdate(restaurantId, {
      name,
      location,
      phone,
      cuisine,
      menu,
    });
    if (!update) {
      return res.status(404).json({ message: "Restauarnt not found" });
    }
    res
      .status(200)
      .json({ message: "Restaurant updated successfully", update });
  } catch (error) {
    console.error("error updating restaurant", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { createRestaurant, updateRestaurant };
