const http = require('http');  // Import the HTTP module
const express = require('express');
const cors = require('cors');
const socketIo = require('socket.io');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const connectDB = require('./src/config/db');  // MongoDB connection file

// Load environment variables
dotenv.config(); // Ensure environment variables are loaded

// Initialize express app
const app = express();

// Create HTTP server for Socket.io
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: "*" } });

// MongoDB connection
connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // Middleware to parse JSON requests
app.use(bodyParser.json()); // Middleware to parse request body

// Socket.io connection
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // Handle sending messages
    socket.on('sendMessage', async ({ senderId, receiverId, message }) => {
        const chat = new Chat({ senderId, receiverId, message });
        await chat.save();
        io.emit('receiveMessage', chat);  // Broadcast message to all clients
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

// Import Routes
const authRoutes = require('./src/routes/authRoutes');
const userRoutes = require('./src/routes/userRoutes');
const serviceProviderRoutes = require('./src/routes/serviceProviderRoutes');
const bookingRoutes = require('./src/routes/bookingRoutes');

// Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/providers', serviceProviderRoutes);
app.use('/api', bookingRoutes);

// Test route to check if the server is running
app.get('/', (req, res) => {
    res.json({ message: 'API is running...' });
});

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
