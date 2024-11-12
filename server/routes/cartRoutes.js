const express = require("express");
const router = express.Router();

router.post("/:userId/add", (req, res) => {
  res.status(200).json({ message: "api end point hit successfully" });
}); // add to cart

router.get("/:userId", (req, res) => {
  res.status(200).json({ message: "api end point hit successfully" });
}); // get cart by id

router.put("/:userId", (req, res) => {
  res.status(200).json({ message: "api end point hit successfully" });
}); // edit cart by id

router.delete("/:userId", (req, res) => {
  res.status(200).json({ message: "api end point hit successfully" });
}); // clear cart

module.exports = router;
