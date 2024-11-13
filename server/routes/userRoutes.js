const express = require("express");
const {
  userSignup,
  userLogin,
  checkUser,
} = require("../controllers/userController");

const authenticateToken = require("../middleware/auth");
const router = express.Router();

router.post("/signup", userSignup);
router.get("/check-user", checkUser);
router.post("/login", userLogin);
router.put("/reset-password");
router.put("/logout");
router.get("/profile");
router.put("/profile-update");
router.delete("/remove-account");

const userRouter = router;

module.exports = userRouter;
