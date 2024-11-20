const MenuItem = require("../models/menuItem"); // Corrected model import

const createMenuItem = async (req, res, next) => {
  try {
    const { title, image, price, description } = req.body;

    if (!title || !price) {
      return res.status(400).json({ message: "Title and price are required" });
    }

    // Corrected to create a new MenuItem
    const newMenuItem = new MenuItem({
      title,
      image,
      price,
      description,
    });

    // Save the MenuItem to the database
    const savedMenuItem = await newMenuItem.save();

    // Send a success response with the created menu item
    res.status(201).json({
      message: "Menu Item Created Successfully",
      savedMenuItem,
    });
  } catch (error) {
    console.error("Error:", error); // Log the error for better debugging
    res.status(500).json({ message: "Internal Server Error" }); // Ensure correct error response
  }
};

const updateMenuItem = async (req, res, next) => {
  try {
    const { itemId } = req.params;
    const { title, image, price, description } = req.body;
    if (!itemId) {
      return res.status(400).json({ message: "itemId is required" });
    }
    const updateItem = await MenuItem.findByIdAndUpdate(itemId, {
      title,
      image,
      price,
      description,
    });
    if (!updateItem) {
      return res.status(404).json({ message: "Menu item not found" });
    }
    res.status(200).json({
      message: "Menu item updated successfully",
      updateItem,
    });
  } catch (error) {
    console.error("Error updating menu item:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteMenuItem = async (req, res, next) => {
  try {
    const { itemId } = req.params;
    if (!itemId) {
      return res.status(400).json({ message: "Item id is required" });
    }
    const deleteMenuItemById = await MenuItem.findByIdAndDelete(itemId);
    if (!deleteMenuItemById) {
      return res.status(404).json({ message: "menu item is not found " });
    }
    res.status(200).json({ message: "Menu item delete successfully" });
  } catch (error) {
    {
      console.error("Error deleting menu item:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};

const getAllMenuItems = async (req, res, next) => {
  try {
    const menuItems = await MenuItem.find();
    if (!menuItems || menuItems.length === 0) {
      return res.status(404).json({ message: "No menu items found" });
    }
    res.status(200).json({
      message: "Menu items fetch successfully",
      menuItems,
    });
  } catch (error) {
    console.error("error fetching menu items", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getMenuItem = async (req, res, next) => {
  try {
    const { itemId } = req.params;
    if (!itemId) {
      return res.status(400).json({ message: "Item Id is required" });
    }
    const getMenuItemById = await MenuItem.findById(itemId);
    if (!getMenuItemById) {
      return res.status(404).json({ message: "No menu item found" });
    }
    res.status(200).json({
      message: "Menu item fetch successfully",
      getMenuItemById,
    });
  } catch (error) {
    console.error("error fetching menu item", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = {
  createMenuItem,
  updateMenuItem,
  deleteMenuItem,
  getAllMenuItems,
  getMenuItem,
};
