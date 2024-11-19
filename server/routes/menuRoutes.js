const express = require("express");
const { createMenuItem } = require("../controllers/menuController");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/item", auth, createMenuItem);
router.get("/all-items");
router.put("/item");
router.get("/item/:id");

const menuRouter = router;

module.exports = menuRouter;
