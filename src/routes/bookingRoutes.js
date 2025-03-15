const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware'); // Change the path to match the correct location
const bookingController = require('../controllers/bookingController');


// Route to create a booking
router.post('/', bookingController.createBooking);

// Route to get a booking by ID
router.get('/:id', bookingController.getBookingById);

// Route to update the booking status
router.put('/:id/status', bookingController.updateBookingStatus);

// Route to get all bookings for a user
router.get('/user/:userId', bookingController.getBookingsForUser);


router.get('/', bookingController.getAllBookings);

// Route to get all bookings for a service provider
router.get('/provider/:providerId', bookingController.getBookingsForServiceProvider);

module.exports = router;

