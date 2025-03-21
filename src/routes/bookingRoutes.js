const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware'); // Change the path to match the correct location
const bookingController = require('../controllers/bookingController');

// Route to create a booking
router.post('/bookings', authMiddleware, bookingController.createBooking);

// Route to get a booking by ID
router.get('/bookings/:id', authMiddleware, bookingController.getBookingById);

// Route to update the booking status
router.put('/bookings/:id/status', authMiddleware, bookingController.updateBookingStatus);

// Route to get all bookings for a user
router.get('/user/:userId/bookings', authMiddleware, bookingController.getBookingsForUser);

// Route to get all bookings for a service provider
router.get('/provider/:providerId/bookings', authMiddleware, bookingController.getBookingsForServiceProvider);

module.exports = router;

