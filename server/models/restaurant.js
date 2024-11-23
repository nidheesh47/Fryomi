const mongoose = require("mongoose");
const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 15,
  },
  image: {
    type: String,
    default:
      "https://cdn1.iconfinder.com/data/icons/hotel-restaurant/512/16-512.png",
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  menu: [
    { type: mongoose.Schema.Types.ObjectId, ref: "MenuItems", required: true },
  ],
  cuisine: [
    {
      title: {
        type: String,
      },
    },
  ],
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
module.exports = Restaurant;
