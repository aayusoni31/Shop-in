const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
// const PORT = 9000;
const PORT = process.env.PORT;
console.log(PORT);

app.get("/", (req, res) => {
  res.send("WELCOME TO SHOPIFY API");
});
app.listen(PORT, () => {
  console.log("Server is running on", PORT);
});
// 7:26:36 timeee
