const Cart = require("../models/cart");
const MenuItem = require("../models/menuItem");
const Restauarnt = require("../models/restaurant");
const User = require();
const addToCart = async (req, res, next) => {
  try {
    const { foodId, quantity, restauarnt } = req.body;
    const userId = req.user.id;
    const user = await user.findById(userId);

    if (!user) {
      return res.status(401).json({ message: "Unauthorized user" });
    }
    if (!foodId || !quantity || !restauarnt) {
      return res
        .status(400)
        .json({ message: "foodid , quantity and restaurant is requires" });
    }
    const foodItem = await MenuItem.findById(foodId, {});
  } catch (error) {}
};
