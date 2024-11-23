const express = require("express");
const {
  createMenuItem,
  updateMenuItem,
  deleteMenuItem,
  getAllMenuItems,
  getMenuItem,
} = require("../controllers/menuController");
const auth = require("../middleware/auth");
const upload = require("../middleware/multer");

const router = express.Router();

// create menu items
router.post(
  "/:restaurantId/create",
  auth,
  upload.single("image"),
  createMenuItem
);
router.get("/all/:restaurantId", getAllMenuItems);
router.put("/:itemId", auth, upload.single("image"), updateMenuItem);
router.get("/:itemId", getMenuItem);
router.delete("/:itemId", auth, deleteMenuItem);
const menuRouter = router;

module.exports = menuRouter;
