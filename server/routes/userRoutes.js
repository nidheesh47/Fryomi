const express = require("express");
const router = express.Router();

router.post("/login");
router.post("signup");
router.put("/reset-password");
router.put("/logout");
router.get("/profile");
router.put("/profile-update");
router.delete("/remove-account");

module.exports = router;
