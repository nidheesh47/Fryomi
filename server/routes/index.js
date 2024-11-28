const express = require("express");
const userRouter = require("./userRoutes");
const restaurantRouter = require("./restaurantRoutes");
const cartRouter = require("./cartRoutes");
const menuRouter = require("./menuRoutes");
const addressRouter = require("./address");
const router = express.Router();

router.use("/user", userRouter);
router.use("/restaurant", restaurantRouter);
router.use("/cart", cartRouter);
router.use("/menu-item", menuRouter);
router.use("/address", addressRouter);
const apiRouter = router;

module.exports = apiRouter;
