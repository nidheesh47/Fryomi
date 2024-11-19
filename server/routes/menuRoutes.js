const express = require("express");
const {
  createMenuItem,
  updateMenuItem,
  deleteMenuItem,
  getAllMenuItems,
  getMenuItem,
} = require("../controllers/menuController");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/item", auth, createMenuItem);
router.get("/all-items", auth, getAllMenuItems);
router.put("/item/:id", auth, updateMenuItem);
router.get("/item/:id", auth, getMenuItem);
router.delete("/item/:id", auth, deleteMenuItem);
const menuRouter = router;

module.exports = menuRouter;
