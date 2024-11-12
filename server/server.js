const express = require("express");
const app = express();

const config = require("./config/db");

const PORT = config.PORT;

const connectDB = config.connectDB;

connectDB();

app.use(express.json());

const userRouter = require("./routes/userRoutes");
const restaurantRouter = require("./routes/restaurantRoutes");
const cartRouter = require("./routes/cartRoutes");

app.use("/user", userRouter);
app.use("/restaurant", restaurantRouter);
app.use("/cart", cartRouter);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "end point does not exist" });
});
