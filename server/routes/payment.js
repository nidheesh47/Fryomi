const express = require("express");
const router = express.Router();
const Auth = require("../middleware/auth");
const {
  createPayment,
  verifyPayment,
} = require("../controllers/paymentController");
router.post("/:orderId", Auth, createPayment);
router.post("/verify", Auth, verifyPayment);
const paymentRouter = router;
module.exports = paymentRouter;
