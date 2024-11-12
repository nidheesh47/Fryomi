const mongoose = require("mongoose");
const menuItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    //default:
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
});

const MenuItems = mongoose.model("MenuItems", menuItemSchema);
module.exports = MenuItems;
