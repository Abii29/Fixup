const express = require('express');
const router = express.Router();
const { createUser, getUserProfile } = require('../controllers/userController');
const authenticateToken = require('../middleware/authMiddleware'); // Renamed for clarity

// Route to create a new user (signup)
router.post('/signup', createUser);

// Protected route to get user profile (requires authentication)
router.get('/profile', authenticateToken, getUserProfile);

module.exports = router;
