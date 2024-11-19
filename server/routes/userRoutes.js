const express = require("express");
const {
  userSignup,
  userLogin,
  checkUser,
  changePassword,
  userProfile,
  userLogout,
  userUpdateprofile,
} = require("../controllers/userController");

const authenticateToken = require("../middleware/auth");
const userAuth = require("../middleware/auth");
const router = express.Router();

router.post("/signup", userSignup);
router.get("/check-user", checkUser);
router.post("/login", userLogin);
router.put("/change-password", userAuth, changePassword);
router.post("/logout", userAuth, userLogout);
router.get("/profile/:id", userAuth, userProfile);
router.put("/profile/:id", userAuth, userUpdateprofile);
router.delete("/remove-account", userAuth);

const userRouter = router;

module.exports = userRouter;
