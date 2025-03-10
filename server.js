const http = require('http');  //  Fix: Import the HTTP module
const express = require('express');
const cors = require('cors');
const socketIo = require('socket.io');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


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
    console.log('User connected:', socket.id);

    socket.on('sendNotification', async ({ userId, title, message, type }) => {
        const notification = new Notification({ userId, title, message, type });
        await notification.save();
        io.emit(`receiveNotification-${userId}`, notification); // Send only to the specific user
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});


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
app.use('/api', bookingRoutes);
app.use(bodyParser.json());
app.use('/api/notifications', notificationRoutes);


// Test route to check if the server is running
app.get('/', (req, res) => {
    res.json({ message: 'API is running...' });
});


app.post('/api/notifications', (req, res) => {
    // Handle the incoming notification here
    const { userId, title, message, type } = req.body;
    // Process the notification data
    res.status(200).send({ message: "Notification sent successfully!" });
});


// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
