const mongoose = require("mongoose");
const Restaurant = require("./restaurant");
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
  restaurant: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant", required: true },
  ],
});

const MenuItems = mongoose.model("MenuItems", menuItemSchema);
module.exports = MenuItems;
