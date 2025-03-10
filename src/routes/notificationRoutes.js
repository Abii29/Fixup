const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware'); 
const notificationController = require('../controllers/notificationController');
const Notification = require('../models/notification'); 

// Send notification (Admins/Service Providers can send)
router.post('/notifications', authMiddleware, notificationController.sendNotification);

//Get all notifications for a user
router.get('/notifications/:userId', authMiddleware, notificationController.getUserNotifications);

//Mark a notification as read
router.put('/notifications/:id/read', authMiddleware, notificationController.markAsRead);

//Delete a notification
router.delete('/notifications/:id', authMiddleware, notificationController.deleteNotification);

module.exports = router;