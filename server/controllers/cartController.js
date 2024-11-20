const Cart = require("../models/cart");
const MenuItem = require("../models/menuItem");

const addToCart = async (req, res, next) => {
  try {
    const { foodId, quantity } = req.body;
    const userId = req.user.id;
    if (!foodId || quantity) {
      return res
        .status(400)
        .json({ message: "foodid and quantity is requires" });
    }
    const foodItem = await MenuItem.findById(foodId);
    if (!foodItem) {
      return res.status(404).json({ message: "Food item is not found" });
    }
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({ userId, items: [], totalPrice: 0, finalPrice: 0 });
    }
    const existingItemIndex = cart.items.findIndex(
      (item) => item.foodId.toString() === foodId
    );
  } catch (error) {}
};
