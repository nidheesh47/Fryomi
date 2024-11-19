const MenuItems = require("../models/menuItem"); // Corrected model import

const createMenuItem = async (req, res, next) => {
  try {
    const { title, image, price, description } = req.body;

    if (!title || !price) {
      return res.status(400).json({ message: "Title and price are required" });
    }

    // Corrected to create a new MenuItem
    const newMenuItem = new MenuItems({
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
    const { id } = req.params;
    const { title, image, price, description } = req.body;
    if (!id) {
      return res.status(400).json({ message: "id is required" });
    }
    const updateMenuItem = await MenuItems.findByIdAndUpdate(id, {
      title,
      image,
      price,
    });
  } catch (error) {}
};

module.exports = { createMenuItem };
