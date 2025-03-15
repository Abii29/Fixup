const http = require('http');  //  Fix: Import the HTTP module
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
dotenv.config(); 
const app = express();
const server = http.createServer(app);


// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json()); // Middleware to parse JSON requests


// Import Routes
const authRoutes = require('./src/routes/authRoutes');
const userRoutes = require('./src/routes/userRoutes');
const serviceProviderRoutes = require('./src/routes/serviceProviderRoutes'); // Ensure correct path
const bookingRoutes = require('./src/routes/bookingRoutes');
const notificationRoutes = require('./src/routes/notificationRoutes');

// Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/providers', serviceProviderRoutes); //
app.use('/api/bookings', bookingRoutes);
app.use('/api/notifications', notificationRoutes);


// Test route to check if the server is running
app.get('/', (req, res) => {
    res.json({ message: 'API is running...' });
});


app.get('/api/bookings/test', (req, res) => {
    res.json({ message: "Test route works!" });
});

// Connect to MongoDB
connectDB();

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
