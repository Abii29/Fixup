const Booking = require('../models/Booking');

// Create new booking
const createBooking = async (req, res) => {
    console.log("Booking route reached");
    try {
        const { user, serviceProvider, serviceType, bookingDate, additionalDetails } = req.body;

        if (!user || !serviceProvider || !serviceType || !bookingDate) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newBooking = new Booking({
            user,
            serviceProvider,
            serviceType,
            bookingDate,
            additionalDetails
        });

        await newBooking.save();
        res.status(201).json({ message: 'Booking created successfully', newBooking });
    } catch (error) {
        console.error("Error creating booking:", error);
        res.status(500).json({ message: 'Error creating booking', error: error.message });
    }
};

// booking ID
const getBookingById = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id).populate('user serviceProvider');
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.status(200).json(booking);
    } catch (error) {
        res.status(500).json({ message: 'Error getting booking', error });
    }
};

// Update booking status (pending to confirmed)
const updateBookingStatus = async (req, res) => {
    try {
        const { status } = req.body;

        if (!status) {
            return res.status(400).json({ message: 'Status is required' });
        }

        const updatedBooking = await Booking.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );

        if (!updatedBooking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        res.status(200).json({ message: 'Booking status updated successfully', updatedBooking });
    } catch (error) {
        res.status(500).json({ message: 'Error updating booking', error });
    }
};

// Get all bookings for a specific user
const getBookingsForUser = async (req, res) => {
    try {
        const bookings = await Booking.find({ user: req.params.userId }).populate('serviceProvider');
        if (!bookings || bookings.length === 0) {
            return res.status(404).json({ message: 'No bookings found for this user' });
        }
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user bookings', error });
    }
};

// Get all bookings for a specific service provider
const getBookingsForServiceProvider = async (req, res) => {
    try {
        const bookings = await Booking.find({ serviceProvider: req.params.providerId }).populate('user');
        if (!bookings || bookings.length === 0) {
            return res.status(404).json({ message: 'No bookings found for this provider' });
        }
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching provider bookings', error });
    }
};

// Export the functions
module.exports = {
    createBooking,
    getBookingById,
    updateBookingStatus,
    getBookingsForUser,
    getBookingsForServiceProvider
};
