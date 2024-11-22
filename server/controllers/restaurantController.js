const Restaurant = require("../models/restaurant");
const User = require("../models/user");
const { param } = require("../routes/userRoutes");

const createRestaurant = async (req, res, next) => {
  try {
    const { name, location, phone, cuisine } = req.body;
    const userId = req.user.id;
    const user = await User.findById(userId);
    const role = req.user.role;
    if (!user || role !== "admin") {
      return res.status(401).json({ message: "Unauthorized user" });
    }
    const restauarntExist = await Restaurant.findOne({ name: name });
    if (restauarntExist) {
      return res.status(400).json({ message: "Restaurant all ready existed" });
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
    const role = req.user.role;
    if (!user || role !== "admin") {
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

const getAllRestaurants = async (req, res, next) => {
  try {
    const allRestaurants = await Restaurant.find();
    if (!allRestaurants || allRestaurants.length === 0) {
      return res.status(404).json({ message: "No restaurant found" });
    }
    res
      .status(200)
      .json({ message: "Fetching restaurants successfully", allRestaurants });
  } catch (error) {
    console.error("error fetching restaurants", error);
    res.status(500).json({ message: "Internal Server error" });
  }
};

const getRestaurant = async (req, res, next) => {
  try {
    const { restaurantId } = req.params;
    if (!restaurantId) {
      return res.status(400).json({ message: "restaurant id is required" });
    }
    const restaurant = await Restaurant.findById(restaurantId).populate("menu");
    if (!restaurant) {
      return res.status(404).json({ message: "restaurant is not found" });
    }
    res
      .status(200)
      .json({ message: "fetching restaurant successfully", restaurant });
  } catch (error) {
    console.error("error fetching restaurant", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteRestaurant = async (req, res, next) => {
  try {
    const { restaurantId } = req.params;
    const userId = req.user.id;
    const user = await User.findById(userId);
    const role = req.user.role;
    if (!user || role !== "admin") {
      return res.status(401).json({ message: "Unauthorized user" });
    }
    if (!restaurantId) {
      return res.status(400).json({ message: "restaurant id is required" });
    }
    const restaurant = await Restaurant.findByIdAndDelete(restaurantId);
    if (!restaurant) {
      return res.status(404).json({ message: "restaurant is not found" });
    }
    res.status(200).json({ message: "Delete restaurant successfully" });
  } catch (error) {
    console.error("error deleting restaurant", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  createRestaurant,
  updateRestaurant,
  getAllRestaurants,
  getRestaurant,
  deleteRestaurant,
};
