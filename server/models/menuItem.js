const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"], // If title is used instead of name
  },
  description: String,
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  image: String,
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

module.exports = MenuItem;
