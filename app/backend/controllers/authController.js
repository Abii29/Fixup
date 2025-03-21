const User = require('../models/User');
const admin = require('firebase-admin');
const jwt = require('jsonwebtoken');
const OTP = require('../models/Otp');  // Model for storing OTPs
const dotenv = require('dotenv');
dotenv.config();

// Example Signup Controller
exports.signup = async (req, res) => {
  const { name, email, password, phoneNumber } = req.body;
  try {
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Create a new user
    const newUser = new User({ name, email, password, phoneNumber });
    await newUser.save();
    
    // Send JWT Token (simplified for example)
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(201).json({ message: 'User created successfully', token });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Example Login Controller
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Send OTP to Phone Number (For SMS verification)
exports.sendOtp = async (req, res) => {
  const { phoneNumber } = req.body;
  try {
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate 6-digit OTP

    // Save OTP to database (for validation later)
    const otpEntry = new OTP({ phoneNumber, otp });
    await otpEntry.save();

    // Here you would integrate a service like Twilio to send OTP via SMS
    // e.g., twilioClient.messages.create({ to: phoneNumber, body: otp });

    res.json({ message: 'OTP sent successfully', otp });  // In real scenario, the OTP should be sent via SMS
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Verify OTP for phone number verification
exports.verifyOtp = async (req, res) => {
  const { phoneNumber, otp } = req.body;
  try {
    const otpEntry = await OTP.findOne({ phoneNumber, otp });
    if (!otpEntry) {
      return res.status(400).json({ error: 'Invalid OTP' });
    }

    // OTP verified, you can now mark phone as verified in the user model
    await User.updateOne({ phoneNumber }, { $set: { isPhoneVerified: true } });
    res.json({ message: 'Phone number verified successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
