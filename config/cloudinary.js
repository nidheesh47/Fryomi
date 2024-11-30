require("dotenv").config();
const cloudinary = require("cloudinary");
// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

const cloudinaryInstance = cloudinary;

module.exports = cloudinaryInstance;
