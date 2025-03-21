const express = require('express');
const router = express.Router();
const { signup, login, sendOtp, verifyOtp } = require('../controllers/authController');

// POST /api/auth/signup
router.post('/signup', signup);

// POST /api/auth/login
router.post('/login', login);

// POST /api/auth/sendOtp
router.post('/sendOtp', sendOtp);

// POST /api/auth/verifyOtp
router.post('/verifyOtp', verifyOtp);

module.exports = router;
