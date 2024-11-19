const express = require("express");
const userRouter = require("./userRoutes");
const restaurantRouter = require("./restaurantRoutes");
const cartRouter = require("./cartRoutes");
const menuRouter = require("./menuRoutes");
const router = express.Router();

router.use("/user", userRouter);
router.use("/restaurant", restaurantRouter);
router.use("/cart", cartRouter);
router.use("/menu", menuRouter);

const apiRouter = router;

module.exports = apiRouter;
