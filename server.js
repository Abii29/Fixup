const http = require('http');  // ✅ Fix: Import the HTTP module
const express = require('express');
const cors = require('cors');
const socketIo = require('socket.io');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const mongoose = require('mongoose');

dotenv.config(); // Ensure environment variables are loaded
const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: "*" } });

const Chat = require('./src/models/Chat');


// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // Middleware to parse JSON requests

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    socket.on('sendMessage', async ({ senderId, receiverId, message }) => {
        const chat = new Chat({ senderId, receiverId, message });
        await chat.save();
        io.emit('receiveMessage', chat); // Broadcast message to all clients
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

// Import Routes
const authRoutes = require('./src/routes/authRoutes');
const userRoutes = require('./src/routes/userRoutes');
const serviceProviderRoutes = require('./src/routes/serviceProviderRoutes'); // Ensure correct path

// Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/providers', serviceProviderRoutes); // ✅ Fixed route path

// Test route to check if the server is running
app.get('/', (req, res) => {
    res.json({ message: 'API is running...' });
});

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
