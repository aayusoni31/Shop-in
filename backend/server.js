const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// const PORT = 9000;
const PORT = process.env.PORT;

// connet to mongodb
connectDB();
app.get("/", (req, res) => {
  res.send("WELCOME TO SHOPIFY API");
});
// api routes
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
