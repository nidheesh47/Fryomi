const express = require("express");
const router = express.Router();

router.post("/add"); // add to cart

router.get("/cartId"); // get cart by id

router.put("/cardId"); // edit cart by id

router.delete("/cartId"); // clear cart

const cartRouter = router;

module.exports = cartRouter;
