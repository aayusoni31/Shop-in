const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // registration logic
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exist" });
    user = new User({ name, email, password });
    await user.save();
    // create jwt
    const payload = { user: { id: user._id, role: user.role } };
    // sign and return the token along with user data
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "40h" },
      (err, token) => {
        if (err) throw err;
        // send the user and token in response
        res.status(201).json({
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
          token,
        });
      },
    );
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

// route post /api/users/login
// @desc authentication user
// @access public
router.post("/login", async (req, res) => {
  console.log("LOGIN BODY:", req.body);
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    console.log("FOUND USER:", user);
    if (!user) return res.status(400).json({ message: "Invalid Credentials" });
    const isMatch = await user.matchPassword(password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid Credentials" });

    // create jwt
    const payload = { user: { id: user._id, role: user.role } };
    // sign and return the token along with user data
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "40h" },
      (err, token) => {
        if (err) throw err;
        // send the user and token in response
        res.json({
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
          token,
        });
      },
    );
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// user profile get request  get/api/user/profile
// @desc get logged-in user profile protected route
// access private
router.get("/profile", protect, async (req, res) => {
  res.json(req.user);
});

module.exports = router;
