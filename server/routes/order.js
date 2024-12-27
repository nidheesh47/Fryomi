const express = require("express");
const {
  createOrder,
  updateStatus,
  deleteOrder,
} = require("../controllers/orderController");
const router = express.Router();

const Auth = require("../middleware/auth");
router.post("/create", Auth, createOrder);
router.put("/status", Auth, updateStatus);
router.delete("/:orderId", Auth, deleteOrder);
const OrderRouter = router;

module.exports = OrderRouter;
