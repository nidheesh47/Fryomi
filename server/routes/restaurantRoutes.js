const express = require("express");

const router = express.Router();

router.get("/list-all"); // list all restaurant
router.get("/:restaurantId"); // get one restaurant
router.put("/:restaurantId"); //update restaurtant
router.post("/create"); // create restaurant
router.delete("/:restaurantId"); // delete restaurant

const restaurantRouter = router;

module.exports = restaurantRouter;
