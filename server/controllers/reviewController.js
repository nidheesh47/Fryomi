// const MenuItem = require("../models/menuItem");
// const Review = require("../models/review");

// const addReview = async (req, res) => {
//   try {
//     const { menuId, rating, comment } = req.body;
//     const userId = req.user.id;
//     const menu = await MenuItem.findById(menuId);
//     if (!menu) {
//       return res.status(400).json({ message: "Menu not found" });
//     }
//     if (rating > 5 || rating < 1) {
//       return res
//         .status(400)
//         .json({ message: "Please provide a proper rating" });
//     }

//     const review = await Review.findOneAndUpdate(
//       { userId, menuId },
//       { rating, comment },
//       { new: true, upsert: true }
//     );
//     res.status(201).json({ message: "Review created successfully", review });
//     const reviewId = await Review.findById(review._id);

//     if (!menu.review.includes(review._id)) {
//       menu.review.push(review._id);
//     }
//     await menu.save();
//     await menu.populate("review");
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const getMenuReviews = async (req, res) => {
//   try {
//     const { menuId } = req.params;
//     const review = await Review.find({ menuId })
//       .populate("userId", "name")
//       .sort({ createdAt: -1 });
//     if (!review.length) {
//       return res
//         .status(400)
//         .json({ message: "No review is found for this menu" });
//     }
//     res.status(200).json({ message: "Review found", review });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const getAvergeRating = async (req, res) => {
//   try {
//     const { menuId } = req.params;
//     const review = await Review.find({ menuId });
//     if (!review) {
//       return res
//         .status(400)
//         .json({ message: "No review is found for this menu" });
//     }
//     const rating =
//       review.reduce((sum, review) => sum + review.rating, 0) / review.length;
//     return res.status(200).json({ rating });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

// module.exports = {
//   addReview,
//   getMenuReviews,
//   getAvergeRating,
// };
