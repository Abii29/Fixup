const express = require('express');
const router = express.Router();
const Notification = require('../models/notification');

// Create a new notification
router.post('/', async (req, res) => {
    try {
        const { userId, title, message, type } = req.body;
        const notification = new Notification({ userId, title, message, type });
        await notification.save();
        res.status(201).json(notification);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get notifications for a user
router.get('/:userId', async (req, res) => {
    try {
        const notifications = await Notification.find({ userId: req.params.userId }).sort({ createdAt: -1 });
        res.json(notifications);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Mark a notification as read
router.put('/:id/read', async (req, res) => {
    try {
        const notification = await Notification.findByIdAndUpdate(req.params.id, { status: 'read' }, { new: true });
        res.json(notification);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
