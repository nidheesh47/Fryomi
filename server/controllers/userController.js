const User = require("../models/User");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/token");
const { findById } = require("../models/menuItem");
const userSignup = async (req, res, next) => {
  try {
    const { name, email, password, mobile, profilePic } = req.body;
    if (!name || !email || !password || !mobile) {
      return res.status(400).json({ message: "All fields required" });
    }
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(400).json({ message: "User all ready existed" });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const newUser = new User({
      name,
      email,
      mobile,
      password: hashedPassword,
      profilePic,
    });
    console.log("api hit");
    await newUser.save();

    const token = generateToken(newUser, "user");

    res.cookie("token", token);

    res.status(200).json({ message: "User created successfully" });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "Internal server error" });
  }
};

const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }
    const userExist = await User.findOne({ email: email });
    if (!userExist) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const isPassMatch = bcrypt.compareSync(password, userExist.password);

    if (!isPassMatch) {
      return res.status(400).json({ message: "user is not authenticated" });
    }

    const token = generateToken(userExist, "user");

    res.cookie("token", token);

    res.status(200).json({ message: "User login successfully" });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "Internal server error" });
  }
};

const userProfile = async (req, res, next) => {
  try {
    const userId = "";
    const userProfile = await user.findById(userId);
    res.status(200).json({ message: "User login successfully" });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "Internal server error" });
  }
};

const checkUser = async (req, res, next) => {
  try {
    const { userEmail } = req.query;
    const userExist = await User.findOne({ email: userEmail });
    console.log("userexist====", userExist);
    if (!userExist) {
      return res.status(400).json({ message: "User does not exist" });
    }
    return res.status(200).json({ userRole: userExist.role });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "Internal server error" });
  }
};
module.exports = { userSignup, userLogin, checkUser };
