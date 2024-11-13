const mongoose = require("mongoose");
const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 15,
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
