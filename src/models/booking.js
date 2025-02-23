const mongoose = require('mongoose');

// Define the booking schema
const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  // Assuming you have a User model
        required: true
    },
    serviceProvider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ServiceProvider',
        required: true
    },
    serviceType: {
        type: String,
        required: true
    },
    bookingDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'completed', 'canceled'],
        default: 'pending'
    },
    additionalDetails: {
        type: String
    }
}, { timestamps: true });

// Create the Booking model
const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
