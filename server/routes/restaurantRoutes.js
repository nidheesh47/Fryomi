const express = require("express");
const {
  createRestaurant,
  updateRestaurant,
  getAllRestaurants,
  getRestaurant,
  deleteRestaurant,
} = require("../controllers/restaurantController");
const Auth = require("../middleware/auth");

const router = express.Router();

router.get("/all", Auth, getAllRestaurants); // list all restaurant
router.get("/:restaurantId", Auth, getRestaurant); // get one restaurant
router.put("/:restaurantId", Auth, updateRestaurant); //update restaurtant
router.post("/create", Auth, createRestaurant); // create restaurant
router.delete("/:restaurantId", Auth, deleteRestaurant); // delete restaurant

const restaurantRouter = router;

module.exports = restaurantRouter;
