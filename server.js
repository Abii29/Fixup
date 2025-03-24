require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

// Profile Schema
const ProfileSchema = new mongoose.Schema({
  name: String,
  email: String,
  bio: String,
  profilePic: String,
});

const Profile = mongoose.model("Profile", ProfileSchema);

// Get Profile
app.get("/profile", async (req, res) => {
  const profile = await Profile.findOne();
  res.json(profile);
});

// Update Profile
app.post("/profile", async (req, res) => {
  const { name, email, bio, profilePic } = req.body;
  let profile = await Profile.findOne();
  
  if (!profile) {
    profile = new Profile({ name, email, bio, profilePic });
  } else {
    profile.name = name;
    profile.email = email;
    profile.bio = bio;
    profile.profilePic = profilePic;
  }
  
  await profile.save();
  res.json(profile);
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
