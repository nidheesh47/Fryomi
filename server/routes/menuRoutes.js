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
router.get("/items", auth, getAllMenuItems);
router.put("/:itemId", auth, updateMenuItem);
router.get("/:itemId", auth, getMenuItem);
router.delete("/:itemId", auth, deleteMenuItem);
const menuRouter = router;

module.exports = menuRouter;
