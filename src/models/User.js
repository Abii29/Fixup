const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    contactInfo: { type: String, required: true },
    location: { type: String, required: true }
});

// Create the User model
const User = mongoose.model('User', userSchema);

// Export the model to use it in controllers
module.exports = User;
