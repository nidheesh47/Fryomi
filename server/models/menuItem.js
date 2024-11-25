const mongoose = require("mongoose");
const Restaurant = require("./restaurant");
const menuItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  restaurant: {
    type: String,
  },
});

const MenuItems = mongoose.model("MenuItems", menuItemSchema);
module.exports = MenuItems;
