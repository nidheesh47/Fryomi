const express = require("express");
const router = express.Router();

router.post("/:userId/add"); // add to cart

router.get("/:userId"); // get cart by id

router.put("/:userId"); // edit cart by id

router.delete("/:userId"); // clear cart

const cartRouter = router;

module.exports = cartRouter;
