const express = require("express");
const app = express();

const config = require("./config/db");
const apiRouter = require("./routes");

const PORT = config.PORT;

const connectDB = config.connectDB;

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("api", apiRouter);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "end point does not exist" });
});
